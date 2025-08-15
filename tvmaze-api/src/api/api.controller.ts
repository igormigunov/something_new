import { Request, Response } from "express";
import { ApiService } from "./api.service";

export class ApiController {
    static inject = [Symbol.for("ApiService")];

    constructor(private readonly apiService: ApiService) { }

    search = async (req: Request, res: Response) => {
        try {
            const q = String(req.query.q || "").trim();
            if (!q) return res.status(400).json({ error: "Missing 'q' query parameter" });

            const result = await this.apiService.search(q);
            if (result.headers["content-type"]) {
                res.setHeader("content-type", result.headers["content-type"]);
            }
            res.status(result.status).send(result.data);
        } catch (e: any) {
            console.error(e);
            res.status(500).json({ error: "internal_error", message: e?.message ?? "Unexpected error" });
        }
    };

    static setup(router: import("express").Router, instance: ApiController) {
        router.get("/search", instance.search);
    }
}