import connect from "@/lib/db";
import Place from "@/lib/modals/place";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        await connect();
        const places = await Place.find().limit(3); 
        return new NextResponse(JSON.stringify(places), { status: 200 });
    } catch (error: any) {
        return new NextResponse("Error in fetching places: " + error.message, {
            status: 500,
        });
    }
};
