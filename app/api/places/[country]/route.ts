import connect from "@/lib/db"
import Place from "@/lib/modals/place"
import { NextResponse } from "next/server"
interface TPlaces{
    _id:string
    title:string
    tags:string
    country:string
    description:string
}
export const GET = async (
    request:Request ,
    context:{params:{country:string}}
)=>{
    await connect()
    const {country} = context.params;
    const data:TPlaces[] = await Place.find()
    const result = data.filter((el) => el.country == country)
    if(result.length === 0){
        return new NextResponse(JSON.stringify({message:"not found this country"}) , {status:400})
    }
    return new NextResponse(JSON.stringify(result) , {status:200})
}