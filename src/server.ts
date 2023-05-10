import { app } from "./app";
import { env } from "./env";

app.listen({
    port: env.PORT,
}).then(() => {
    console.log(`🚀 O sevidor está rodando na porta ${env.PORT}`);
});
