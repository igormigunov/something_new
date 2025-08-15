export type Token<T = any> = string | symbol;

export interface Provider<T = any> {
    token: Token<T>;
    useFactory: (get: <U>(t: Token<U>) => U) => T;
}

export class Container {
    private readonly instances = new Map<Token, any>();

    register(providers: Provider[]) {
        for (const p of providers) {
            const instance = p.useFactory(<U>(t: Token<U>) => this.get<U>(t));
            this.instances.set(p.token, instance);
        }
    }

    get<T>(token: Token<T>): T {
        if (!this.instances.has(token)) {
            throw new Error(`Provider not found for token: ${String(token)}`);
        }
        return this.instances.get(token);
    }
}