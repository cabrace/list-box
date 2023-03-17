
// +page.server.js >> __this_file__ >> +page.js
export async function load( {data, params} ) {

  console.log("+layout.js >> DATA ", data)
  console.log("+layout.js >> PARAMS ", params.id)
  // depends('data:collections');


  return {
    collections: data.collections
  };
}
