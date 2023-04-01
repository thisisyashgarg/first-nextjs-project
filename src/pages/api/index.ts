import type { NextApiRequest, NextApiResponse } from "next";

import { config } from "dotenv";
config();

export default function (req: NextApiRequest, res: NextApiResponse) {
  res.send("server working fine");
}
