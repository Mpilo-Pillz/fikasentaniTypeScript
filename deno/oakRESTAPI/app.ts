import { Application } from "https://deno.land/x/oak/mod.ts";
import todosRoutes from "./routes/todo.ts";

const app = new Application();

app.use(async (ctx, next) => {
  await console.log(
    "Just creating this middleware to say aaaaa for the day I finally understand what a middleware is"
  );
  next();
});

//register he todos routes to be used
app.use(todosRoutes.routes());
app.use(todosRoutes.allowedMethods());

await app.listen({ port: 8000 });
