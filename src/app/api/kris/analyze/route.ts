import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { cookies } from "next/headers";
import { getUserByJWT } from "@/server/authorize";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { requirement, passage } = body;

    const { userEmail: user } = await getUserByJWT();
    console.log(`getUserIdByJWT user`, user);

    const cookieStore = await cookies();
    const sessionId = uuid();

    cookieStore.set("kris-session", sessionId);
    console.log(
      `env url`,
      `${process.env.KRIS_SERVICE_URL}/prompt/matched-score/`
    );

    const res = await axios.post(
      `${process.env.KRIS_SERVICE_URL}/prompt/matched-score/`,
      {
        user,
        sessionId,
        requirement,
        passage,
      }
    );

    console.log(`route res.data`, res.data);

    return NextResponse.json({
      status: 200,
      data: { score: 0, intersections: [] },
    });
  } catch (err) {
    console.log(`route err`, err);
    return NextResponse.json({ status: 500 });
  }
}
