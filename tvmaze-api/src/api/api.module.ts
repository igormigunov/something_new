import { ModuleDef } from "../core/app";
import { Provider } from "../core/container";
import { ApiService } from "./api.service";
import { ApiController } from "./api.controller";

const TOKENS = {
    ApiService: Symbol.for("ApiService"),
};

const providers: Provider[] = [
    {
        token: TOKENS.ApiService,
        useFactory: () => new ApiService()
    }
];

export const ApiModule: ModuleDef = {
    prefix: "api",
    providers,
    controllers: [ApiController]
};