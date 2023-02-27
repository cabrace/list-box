
// +page.server.js >> __this_file__ >> +page.js
export async function load( {data} ) {

    console.log("Page.js COLLECTIONS >>", data.collections)

    return {
        collections: data.collections
    };
}