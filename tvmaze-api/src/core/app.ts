import express, { Router } from "express";
import cors from "cors";
import { Container, Provider, Token } from "./container";

export interface ModuleDef {
    prefix?: string;              // например: 'proxy'
    providers?: Provider[];
    controllers?: ControllerClass<any>[];
}

export interface ControllerClass<T> {
    new(...args: any[]): T;
    inject?: Token[];
    setup(router: Router, instance: T): void;
}

export function createApp(modules: ModuleDef[]) {
    const app = express();
    app.use(express.json());
    app.use(cors());

    const container = new Container();

    // 1) Register all providers
    for (const m of modules) {
        container.register(m.providers ?? []);
    }

    // 2) Initialize controllers and routes
    for (const m of modules) {
        const router = Router();
        for (const Ctrl of m.controllers ?? []) {
            const deps = (Ctrl.inject ?? []).map(token => container.get(token));
            const instance = new Ctrl(...deps);
            Ctrl.setup(router, instance);
        }
        app.use(m.prefix ? `/${m.prefix.replace(/^\/+/, "")}` : "/", router);
    }

    // health
    app.get("/health", (_req, res) => res.json({ ok: true }));

    return app;
}
