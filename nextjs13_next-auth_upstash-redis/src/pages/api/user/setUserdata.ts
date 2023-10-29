import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";

export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions);
    const googleId = session?.user.id;

    // TODO: Validate body matches UserData type
  
    await db.set(`userData:${googleId}`, req.body);
    
    res.status(200).json({ message: 'User data saved successfully.' });
  }