import {Schema , model , models} from "mongoose"

const CountrySchema = new Schema(
    {
        country :{type:"string" , required:true , unique:true},
        address:{type:"string" , required:true , unique:true}
    },
    {
        timestamps : true
    }
);

const Country = models.Country || model("Country" , CountrySchema)

export default Country;