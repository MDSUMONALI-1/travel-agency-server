const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://aliceng:CPYGPkH0idj7KPLX@cluster0.aq2lr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        console.log("database connected")
    }
    finally {
        // await client.close();
    }i
}

run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('assas rver is running');
});
app.get('/hello', (req, res) => {
    res.send('server is running');
});

app.listen(port, () => {
    console.log('Server running at port', port);
})