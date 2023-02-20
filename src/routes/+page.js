// Load page data from backEnd to front-end here

export const load = ({ fetch }) => {
    const fetchCollections = async () => {
        const res = await fetch('/api/collections')
        const data = await res.json()
        return data.items
    }

    return {
        items: fetchCollections()
    }

}