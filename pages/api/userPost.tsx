import clientPromise from "../../lib/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

// interface UserDetails {
//   _id?: string;
//   username?: string;
//   email?: string;
//   password?: string;
//   remember?: string;
// }
export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const client = await clientPromise;
  const db = client.db("user_data");

  switch (req.method) {
    case "POST":
      const bodyObject = req.body;
      const myPost = await db.collection("user_details").insertOne(bodyObject);
      res.json(myPost.ops[0]);
      break;
    case "GET":
      // const getUserDetail = req.body;
      const userDetails = await db.collection("user_details").findOne({ Username: { $eq: "louis" } });
      const UserData = { _id: userDetails._id, username: userDetails.Username, email: userDetails.Email };
      res.json({ status: 200, data: UserData });
      break;
  }
}
