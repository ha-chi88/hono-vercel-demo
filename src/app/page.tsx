import { client } from "@/lib/hono";
import React from "react";

async function Page() {
  const res = await client.api.hello.$get();
  const result = await res.json();
  return <div>{result.message}</div>;
}

export default Page;
