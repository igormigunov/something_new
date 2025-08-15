import { delay } from "../utills";

export class ApiService {
    private readonly baseUrl = "https://api.tvmaze.com";

    async search(q: string) {
        const resp = await fetch(`${this.baseUrl}/search/shows?q=${encodeURIComponent(q)}`, {
            method: "GET",
            headers: { "accept": "application/json" }
        });

        const headers: Record<string, string> = {};
        resp.headers.forEach((v, k) => (headers[k] = v));

        const ct = resp.headers.get("content-type") || "";
        const data = ct.includes("application/json") ? await resp.json() : await resp.text();

        await delay(5000);

        return { status: resp.status, headers, data };
    }
}