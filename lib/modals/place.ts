import {Schema , model , models} from "mongoose"

const PlaceSchema = new Schema(
    {
        title :{type:"string" , required:true , unique:true},
        continent:{type:"string" , required:true } ,
        tags:{type:"string"} ,
        image:{type:"string" , required:true , unique:true},
        country:{type:"string" , required:true},
        description:{type:"string" , required:true}
    },
    {
        timestamps : true
    }
);

const Place = models.Place || model("Place" , PlaceSchema)

export default Place;