import PocketBase from 'pocketbase';
import 'dotenv/config'

const pb = new PocketBase('http://127.0.0.1:8090');

async function main() {
    // List and filter "users" collection records
    const result = await pb.collection('users').getFullList();
    console.log(result);

    // Keep the script running
    setInterval(() => {}, 1000); // Keeps the event loop busy
}

main();