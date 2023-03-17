import db from '$lib/db';
import { ObjectId } from 'mongodb';

export async function load({ params, data }) {

  console.log("/box/+page.server.js PARAMS >> ", params)
  console.log("/box/+page.server.js DATA >> ", data)

  let listItems = [];
  // const WithId = await db.collection("boxes").find({_id: new ObjectId(params.id)}).forEach((collection) =>{
        // let obj = {
            // Restructure OjectId
            // id: collection._id.toString(),
            // name: collection.name,
            // list: collection.list
        // }
        // listItems.push(obj)
    // })

  const withId = await db.collection("boxes").find({ _id: new ObjectId(params.id)})

    return {
      status: 200,
      list: withId.list
    }

}

