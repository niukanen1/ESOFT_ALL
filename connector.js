const dotenv = require('dotenv');
dotenv.config();
const { MongoClient} = require('mongodb');

const client = new MongoClient(process.env.MONGODB_URI)
const db = client.db('ESOFT');
client.connect(async (err) => { 
    if (err) { 
        console.log("Something went really wrong!!")
        console.log(err)
    } else { 
        console.log("MongoDB connected");
    }
})


module.exports = {db};