import connect from "@/lib/db"
import Place from "@/lib/modals/place";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
    try {

        const { searchParams } = new URL(request.url)
        const searchKeywords = searchParams.get("keywords") as string;
        const checked = searchParams.getAll("checked");
        const continent = searchParams.getAll("continent");

        await connect();

        const places = await Place.find().skip(3);

        let result = searchKeywords ?
            places.filter(el => el.title.includes(searchKeywords) || el.description.includes(searchKeywords))
            : places

        if (checked.length > 0) {
            result = result.filter((el) => {
                const tagsArray = JSON.parse(el.tags.replace(/'/g, '"'));
                return checked.every(tag => tagsArray.includes(tag));
            });
        }

        if (continent.length > 0) {
            result = result.filter(el => continent.includes(el.continent));
        }

        return new NextResponse(JSON.stringify(result), { status: 200 });


    } catch (error: any) {
        return new NextResponse("Error in fetching places" + error.message, {
            status: 500,
        });
    }
}
export const POST = async (request: Request) => {
    try {
        const body = await request.json();
        await connect();
        const newPlace = new Place(body);
        await newPlace.save();

        return new NextResponse(
            JSON.stringify({ message: "place is created", place: newPlace }),
            { status: 200 }
        );

    } catch (error: any) {
        return new NextResponse("Error in fetching countries" + error.message, {
            status: 500,
        });
    }
}