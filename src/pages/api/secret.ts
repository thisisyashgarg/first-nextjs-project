import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

export default function (req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.body;
  const { admin } = jwt.verify(token, process.env.KEY as string) as {
    [key: string]: boolean;
  };

  if (admin) {
    res.send({ secretAdminCode: 12345 });
  } else {
    res.send({ admin: false });
  }
}
