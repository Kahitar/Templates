import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  const googleId = session?.user.id;

  const data: UserData | null = await db.get(`userData:${googleId}`);
  
  res.status(200).json({ username: data?.username });
}