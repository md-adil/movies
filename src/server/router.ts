import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter as baseRouter } from "next-connect";

export function createRouter() {
  return baseRouter<NextApiRequest, NextApiResponse>();
}
