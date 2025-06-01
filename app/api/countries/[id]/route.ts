import connect from "@/lib/db";
import Country from "@/lib/modals/country";
import { Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    await connect();

    const { id } = params;

    if (!id || !Types.ObjectId.isValid(id)) {
      return new NextResponse(JSON.stringify({ message: "Invalid Id" }), {
        status: 400,
      });
    }

    const country = await Country.findById(id);

    if (!country) {
      return new NextResponse(
        JSON.stringify({ message: "Country not found" }),
        { status: 404 }
      );
    }

    return new NextResponse(JSON.stringify(country), { status: 200 });
  }catch(error:any)  {
    return new NextResponse("error 500"), { status: 500 };
  }
}