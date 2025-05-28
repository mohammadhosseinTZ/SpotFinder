
import connect from "@/lib/db"
import Country from "@/lib/modals/country";
import { NextResponse } from "next/server"

export const GET = async () => {
    try {
        await connect();
        const countries = await Country.find()
        return new NextResponse(JSON.stringify(countries ), { status: 200 })
    } catch (error: any) {
        return new NextResponse("Error in fetching countries" + error.message, {
            status: 500,
        });
    }
}
export const POST = async(request:Request) =>{
    try{
        const body = await request.json();
        await connect();
        const newCountry = new Country(body);
        await newCountry.save();
    
        return new NextResponse(
          JSON.stringify({ message: "Country is created", country: newCountry }),
          { status: 200 }
        );

    }catch (error: any) {
        return new NextResponse("Error in fetching countries" + error.message, {
            status: 500,
        });
    }
}