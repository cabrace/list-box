export const load = ({ params }) => {

  console.log("Server PARAMS ", params)
    return {
        id: params.id
    }
}
