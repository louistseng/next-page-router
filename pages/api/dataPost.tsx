import clientPromise from "../../lib/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const client = await clientPromise;
  const db = client.db("bicycle_data");
  switch (req.method) {
    case "POST":
      let bodyObject = req.body;
      let myPost = await db.collection("bicycle_details").insertMany(bodyObject);
      res.json(myPost.ops[0]);
      break;
    case "GET":
      const pdItems = await db.collection("bicycle_details").find({}).toArray();
      res.json({ status: 200, data: { pdItems } });
      break;
  }
}
