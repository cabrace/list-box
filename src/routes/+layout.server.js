import db from '$lib/db';
import { ObjectId } from 'mongodb';

export async function load(){
    const collections = await db.collection("boxes").find({}, {projection: {_id:0}}).toArray();
    // const collections = await db.collection("boxes").find({}).toArray();

    console.log("collections", collections)
    return {
        status: 200,
        collections: collections
    }
}