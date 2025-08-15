import cors from "cors";
import { createApp } from "./core/app";
import { ApiModule } from "./api/api.module";

const PORT = parseInt(process.env.PORT || "3001", 10);

const app = createApp([ApiModule]);

app.listen(PORT, () => {
    console.log(`API http://localhost:${PORT}/api`);
});