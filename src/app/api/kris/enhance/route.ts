import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { cookies } from "next/headers";
import { getUserByJWT } from "@/server/authorize";

export async function POST(req: NextRequest, params: { [k: string]: string }) {
  try {
    const { userEmail: user } = await getUserByJWT();
    console.log(`getUserIdByJWT user`, user);

    const cookieStore = await cookies();
    const sessionId = uuid();

    cookieStore.set("kris-session", sessionId);

    const res = await axios.post(
      `${process.env.KRIS_SERVICE_URL}/prompt/enhance/`,
      {
        user,
        sessionId,
      }
    );

    return NextResponse.json({ status: 200 });
  } catch (err) {
    return NextResponse.json({ status: 200 });
  }
}
