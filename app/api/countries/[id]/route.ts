import connect from "@/lib/db";
import Country from "@/lib/modals/country";
import { Types } from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (
    request: Request,
    context: { params: { id: string } }
  ) => {
    const { id } = context.params;
    
    await connect()

    if(!id || !Types.ObjectId.isValid(id)){
      return new NextResponse(JSON.stringify({message:"Invalid Id"}) , {status:400});
    }

    const countries = await Country.findById(id)
    return new NextResponse(JSON.stringify(countries) , {status:200});
  };
  