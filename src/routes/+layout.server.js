import db from '$lib/db';
import { ObjectId } from 'mongodb';

// valid exports are load, prerender, csr, ssr, trailingSlash, config, or anything with a '_' prefix

export async function load({request}){


  console.log("+layout.server.js >> ")
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

  console.log("+layout.server.js >> ", collections)
  // console.log("withID:", collData)
  return {
    status: 3423400,
    // collections: collections
    collections: collections
  }
}

// export const actions = {
//     create: async({request}) => {
//         const formData = await request.formData()
//         console.log("FormData", formData)
//     } 

// }
