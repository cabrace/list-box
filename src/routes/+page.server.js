import db from '$lib/db';


export function load(){

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
			return fail(422, {
				// description: data.get('description'),
				// error: error.message
			});
		}
	},

	delete: async ({ cookies, request }) => {
		const data = await request.formData();
		// db.deleteTodo(cookies.get('userid'), data.get('id'));
	}
};