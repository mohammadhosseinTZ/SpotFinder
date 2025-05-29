import connect from "@/lib/db"
import Place from "@/lib/modals/place";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        await connect();
        const places =await Place.find().skip(3);
        return new NextResponse(JSON.stringify(places ), { status: 200 })
    } catch (error: any) {
        return new NextResponse("Error in fetching places" + error.message, {
            status: 500,
        });
    }
}
export const POST = async(request:Request) =>{
    try{
        const body = await request.json();
        await connect();
        const newPlace = new Place(body);
        await newPlace.save();
    
        return new NextResponse(
          JSON.stringify({ message: "place is created", place: newPlace }),
          { status: 200 }
        );

    }catch (error: any) {
        return new NextResponse("Error in fetching countries" + error.message, {
            status: 500,
        });
    }
}