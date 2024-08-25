import clientPromise from "../../lib/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

interface UserDetails {
  _id?: string;
  name?: string;
  email?: string;
}
export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const client = await clientPromise;
  const db = client.db("user_data");

  switch (req.method) {
    case "POST":
      let bodyObject: UserDetails = req.body;
      let myPost = await db.collection("user_details").insertOne({ bodyObject });
      res.json(myPost.ops[0]);
      break;
    case "GET":
      const pditems: UserDetails[] = await db.collection("user_details").find({}).toArray();
      res.json({ status: 200, data: pditems });
      break;
  }
}
