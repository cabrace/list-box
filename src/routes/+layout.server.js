import db from '$lib/db';
import { ObjectId } from 'mongodb';

export async function load({data, request}){

    if (request.method === "POST"){
        console.log("POST server.js")
    }



    console.log("DATA layout.server.js", data)
    //Return all values without the _id
    // const collections = await db.collection("boxes").find({}, {projection: {_id:0}}).toArray();
    
    let collections = [];
    const WithId = await db.collection("boxes").find({}).forEach((collection) =>{
        let obj = {
            //Restructure OjectId
            id: collection._id.toString(),
            name: collection.name,
            list: collection.list
        }
        collections.push(obj)
    })


    
    // const collections = await db.collection("boxes").find({}).toArray();

    // console.log("collections", collections)
    // console.log("withID:", collData)
    return {
        status: 200,
        // collections: collections
        collections: collections
    }
}
