

// +page.server.js >> __this_file__ >> +page.js
export async function load( {data, params} ) {

  console.log("+layout.js >> DATA ", data)
  console.log("+layout.js >> PARAMS ", params.id)

  let collections = data.collections
  let currentID = params.id

  console.log("+layout.js >> currentID", currentID)
  


  const selectedCollection = collections.filter(collection => collection.id === currentID)
  console.log("+layout >> currentList", selectedCollection[0].list)

  let selectedList = selectedCollection[0].list || [];

  return {
    collections: collections,
    selected: selectedList
  };
}
