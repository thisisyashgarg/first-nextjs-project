// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
const KEY = "hjksdgbfvcjhsdbfvjhbdfj";
export default function (req: NextApiRequest, res: NextApiResponse) {
  if (!req.body) {
    res.statusCode = 404;
    res.send("Error");
    return;
  }
  const { username, password } = req.body;
  console.log(req.body);
  // console.log(req.query);
  res.json({
    token: jwt.sign(
      {
        username,
        admin: username === "admin" && password === "admin",
      },
      KEY
    ),
  });
}
