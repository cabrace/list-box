
// +page.server.js >> __this_file__ >> +page.js
export async function load( {data} ) {

    console.log("+layout.js >>", data)
    // depends('data:collections');

    return {
        collections: data.collections
    };
}