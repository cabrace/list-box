import db from '$lib/db';


export function load( {par} ){


  console.log("+page.server.js >> ")
    // default load data to export to + page
   
}


// export const actions = {
//     create: async({request}) => {
//         const formData = await request.formData()
//         console.log("FormData", formData)
//     } 

// }

export const actions = {
    // default: async() => {

    // },
	create: async ({ request }) => {
		const data = await request.formData();
        console.log("formData ", data)

		try {
			db.addItem(coo.geta('parentid'), data.get('item'));
		} catch (error) {
			// throw error(422, {
        // description: data.get('description'),
        // error: error.message
			// });
		}
	},

	delete: async ({ cookies, request }) => {
		const data = await request.formData();
		// db.deleteTodo(cookies.get('userid'), data.get('id'));
	}
};
