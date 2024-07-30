import PocketBase from 'pocketbase';
import 'dotenv/config'

const pb = new PocketBase('http://127.0.0.1:8090');

// list and filter "example" collection records
const result = await pb.collection('users').getFullList({
    headers: {
        "id": process.env.AUTH_TOKEN
    }
})

console.log(result)
