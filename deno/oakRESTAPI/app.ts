import { Application } from "https://deno.land/x/oak/mod.ts";
import todosRoutes from "./routes/todos.ts";

const app = new Application();

// app.use((ctx) => {
// });

//register he todos routes to be used
app.use(todosRoutes.routes());
app.use(todosRoutes.allowedMehods);

await app.listen({ port: 8000 });
