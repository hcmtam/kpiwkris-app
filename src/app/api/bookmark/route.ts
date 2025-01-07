import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { cookies } from "next/headers";
import { getUserByJWT } from "@/server/authorize";

const baseUrl = `${process.env.KRIS_SERVICE_URL}/bookmark/`;

export async function GET(req: NextRequest) {
  try {
    const { id } = await getUserByJWT();

    const res = await axios.get(`${baseUrl}list/`, {
      params: {
        userId: id,
      },
    });

    console.log(`route bookmark`, res.data.data);
    return NextResponse.json({ data: res.data.data, status: 200 });
  } catch (err) {
    return NextResponse.json({ err: err, status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { userEmail: user } = await getUserByJWT();
    console.log(`getUserIdByJWT user`, user);

    const cookieStore = await cookies();
    const sessionId = cookieStore.get("kris-session");

    console.log(`sessionId`, sessionId.value);

    const res = await axios.post(`${baseUrl}`, {
      sessionId: sessionId.value,
    });

    console.log(`route res.data`, res.data);
    return NextResponse.json(res.data);
  } catch (err) {
    return NextResponse.json({ status: 200 });
  }
}
