
# MongoDB connection:
 
 ## 1. Install 
 ```bash 
 npm i mongodb
 ```

## 2. Create '.env' VARS in root folder:

Both methods involve creating a '.env' file in root folder of app
with contents of:
```bash
SOME_VAR=some_string_without_quotes
VITE_VAR=another_string-without_quotes
```

## 3. Reference mongoDB in 'db.ts'

```javascript
//db.ts

const MongoClient = require("mongodb").MongoClient;

// Reference ENV vars created above choosing either method
// Method A
import { MONGO_DB } from '$env/static/private'; //Regular .env var import
import { MONGODB_DEV } from '$env/static/private'; //Regular .env var import

// Method B
import.meta.env.VITE_MONGO_DB

//create connection reference and return handle
const client = new MongoClient(MONGODB_DEV)
await client.connect()
export default client.db("List")
```

# Create-svelte app

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest list-box
```

## Developing

`npm install` (or `pnpm install` or `yarn`)
'nrd' - npm run dev
