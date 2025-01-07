import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const baseUrl = `${process.env.KRIS_SERVICE_URL}/bookmark/`;

export async function GET(req: NextRequest, params: { [k: string]: string }) {
  try {
    //console.log(`route res.data`, res.data);
    const res = await axios.get(`${baseUrl}/list/`);
    return NextResponse.json(res.data);
  } catch (err) {
    return NextResponse.json({ err: err });
  }
}

// delete single record
export async function DELETE() {
  return NextResponse.json({ status: 200 });
}
