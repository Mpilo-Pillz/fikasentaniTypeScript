import { serve } from "https://deno.land/std/http/server.ts";
const server = serve({ port: 3000 });

/****
 * Below is an async iterable
 * server is an iterable like an array full of promises (an infinite array)
 * server generates new promises which we can "await", then a new promises
 * a new promise which then resolves is generated for every incoming request
 * Deno out the box supports top level "await" so no need to wrap in an async function
 ******/
for await (const req of server) {
  // This code gets executed for every incoming request
  // This is how we listen and respond to requests the Deno way
  req.respond({ body: "Ola Mundo\n" });
}
