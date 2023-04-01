import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

export default function (req: NextApiRequest, res: NextApiResponse) {
  res.send("server working fine");
}
