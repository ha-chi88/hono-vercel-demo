import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import { z } from "zod";

export const runtime = "edge";

const app = new Hono().basePath("/api");

const route = app
  .get("/hello", (c) => {
    return c.json({
      message: "Hello Next.js!",
    });
  })
  .post("/posts", zValidator("json", z.object({ name: z.string() })), (c) => {
    const { name } = c.req.valid("json");

    return c.json({
      name,
    });
  });

export type AppType = typeof route;

export const GET = handle(app);
export const POST = handle(app);