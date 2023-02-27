import db from '$lib/db';
import { ObjectId, ReturnDocument } from 'mongodb';
import { collectionItemsStore, itemStore } from '$lib/stores/stores.js';


export const GET = async ({ request }) => {

    const authHeader = request.headers.get('Authorization')
    console.log(authHeader)

    if (authHeader !== 'Myauthheader'){
        return new Response(JSON.stringify({message: 'Invalid credentials'}), {status:401})
    }

    return new Response(JSON.stringify({ status:200,body: {message: "Sample response"}}))
}

// export const POST = async ({ request, depends }) => {
export const POST = async ({ request}) => {
    console.log("POST")
    // depends('data:collections');
    const body = await request.json();

    let newCollectionItems = await db.collection("boxes").findOneAndUpdate(
        {_id: new ObjectId(body.id)}, 
        {$push: {"list": body.item}}, 
        {ReturnDocument: true}
    )

    console.log("COLLECTION", newCollectionItems)

    // const selectedID = body.id;
    // const item = body.item;

    return new Response(JSON.stringify(
        {
            status: 200,
            body: { message: "Success", id: body.id, items: newCollectionItems }
        }
    ))
}

export const DELETE = async ({ request }) => {
    console.log("DELETE")
    const body = await request.json();

    let newCollectionItems = await db.collection("boxes").findOneAndDelete(
        {_id: new ObjectId(body.id)}, 
        {$pull: {"list": body.item}}, 
        {ReturnDocument: true}
    )

    console.log("COLLECTION", newCollectionItems)

    // const selectedID = body.id;
    // const item = body.item;

    return new Response(JSON.stringify(
        {
            status: 200,
            body: { message: "Success", id: body.id, items: newCollectionItems }
        }
    ))
}
