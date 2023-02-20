// import db from "$lib/dashboard_db"
import { ObjectId } from 'mongodb';

export function get() {
}

export function del() {
}

export function post(request) {
    console.log("POST")
    const body = JSON.parse(request.body);

    // const selectedID = body.id;
    // const item = body.item;

    return {
        status: 200,
        body: {message: `Received ${body}`}
    }
}

export function put() {
}
