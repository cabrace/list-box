import db from '$lib/db';
import { ObjectId } from 'mongodb';

export async function load(){

    //Return all values without the _id
    // const collections = await db.collection("boxes").find({}, {projection: {_id:0}}).toArray();
    
    let collData = [];
    const WithId = await db.collection("boxes").find({}).forEach((collection) =>{
        let obj = {
            //Restructure OjectId
            id: collection._id.toString(),
            name: collection.name,
            list: collection.list
        }
        collData.push(obj)
    })


    
    // const collections = await db.collection("boxes").find({}).toArray();

    // console.log("collections", collections)
    // console.log("withID:", collData)
    return {
        status: 200,
        // collections: collections
        collections: collData
    }
}