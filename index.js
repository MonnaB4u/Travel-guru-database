const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const { ObjectId } = require('mongodb');
require('dotenv').config()
const { MongoClient } = require('mongodb');

const uri = `mongodb+srv://${process.env.DB_user}:${process.env.DB_Password}@cluster0.doolq.mongodb.net/${process.env.DB_Name}?retryWrites=true&w=majority`;

const app = express()
app.use(bodyParser.json());
app.use(cors())
const port =process.env.PORT || 5000


app.get('/', (req, res) => {
    res.send('Hello World!')
})

console.log(process.env.DB_user + process.env.DB_Password + process.env.DB_Name)


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        const database = client.db("TravelGuru");
        const DestinationCollection = database.collection("Destinations");
        const HotelCollection = database.collection("HotelData");
        const TransportCollection = database.collection("Transport");
        const tourGuidCollection = database.collection("tourGuid");
        const feedbackCollection = database.collection("feedback");


        console.log("Database Connected")
        // Code From Here CRUD

        /// Add New Destination

        app.post('/addDestinations', async (req, res) => {
            const newUser = req.body
            const result = await DestinationCollection.insertOne(newUser);
            console.log('New user found', req.body)
            console.log('New user added', result)
            res.json(result)
        })
        //////// Get Destination Collection

        app.get('/DestinationCollection', async (req, res) => {
            const cursor = DestinationCollection.find({});
            const user = await cursor.toArray();
            res.send(user);
        })

        ///// Delete One Destination
        app.delete('/DestinationCollection/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await DestinationCollection.deleteOne(query);
            console.log('delete user', result)
            res.json(result)
        })

        //////get Spacific Destination by ID

        app.get('/DestinationCollection/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            users = await DestinationCollection.findOne(query);
            res.send(users)
        })

        ///Update Destination collection by id
        app.put('/DestinationCollection/:id', async (req, res) => {
            const id = req.params.id;
            const UpdateUser = req.body
            const filter = { _id: ObjectId(id) };
            const options = { upsert: true };
            const updateDoc = {
                $set: {
                    name: UpdateUser.name,
                    email: UpdateUser.email
                }
            };
            const result = await DestinationCollection.updateOne(filter, updateDoc, options);
            res.json(result)
        })
        /////////////////Hotel///////////////

        app.post('/addHotel', async (req, res) => {
            const newUser = req.body
            const result = await HotelCollection.insertOne(newUser);
            console.log('New user found', req.body)
            console.log('New user added', result)
            res.json(result)
        })

        //////// Get HotelCollection

        app.get('/HotelCollection', async (req, res) => {
            const cursor = HotelCollection.find({});
            const user = await cursor.toArray();
            res.send(user);
        })

        ///// Delete One HotelCollection
        app.delete('/HotelCollection/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await HotelCollection.deleteOne(query);
            console.log('delete user', result)
            res.json(result)
        })

        //////get Spacific HotelCollection by ID

        app.get('/HotelCollection/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            users = await HotelCollection.findOne(query);
            res.send(users)
        })

        ///Update Destination collection by id
        app.put('/HotelCollection/:id', async (req, res) => {
            const id = req.params.id;
            const UpdateUser = req.body
            const filter = { _id: ObjectId(id) };
            const options = { upsert: true };
            const updateDoc = {
                $set: {
                    name: UpdateUser.name,
                    email: UpdateUser.email
                }
            };
            const result = await HotelCollection.updateOne(filter, updateDoc, options);
            res.json(result)
        })


        /////////////////Transport///////////////

        app.post('/addTransport', async (req, res) => {
            const newUser = req.body
            const result = await TransportCollection.insertOne(newUser);
            console.log('New user found', req.body)
            console.log('New user added', result)
            res.json(result)
        })

        //////// Get Transport Collection

        app.get('/TransportCollection', async (req, res) => {
            const cursor = TransportCollection.find({});
            const user = await cursor.toArray();
            res.send(user);
        })

        ///// Delete One Transport
        app.delete('/TransportCollection/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await TransportCollection.deleteOne(query);
            console.log('delete user', result)
            res.json(result)
        })

        //////get Spacific Transport by ID

        app.get('/TransportCollection/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            users = await TransportCollection.findOne(query);
            res.send(users)
        })

        ///Update Transport collection by id
        app.put('/TransportCollection/:id', async (req, res) => {
            const id = req.params.id;
            const UpdateUser = req.body
            const filter = { _id: ObjectId(id) };
            const options = { upsert: true };
            const updateDoc = {
                $set: {
                    name: UpdateUser.name,
                    email: UpdateUser.email
                }
            };
            const result = await TransportCollection.updateOne(filter, updateDoc, options);
            res.json(result)
        })

        /////////////////TourGuide///////////////

        app.post('/addTourguide', async (req, res) => {
            const newUser = req.body
            const result = await tourGuidCollection.insertOne(newUser);
            console.log('New user found', req.body)
            console.log('New user added', result)
            res.json(result)
        })

        //////// Get TourGuide Collection

        app.get('/tourGuidCollection', async (req, res) => {
            const cursor = tourGuidCollection.find({});
            const user = await cursor.toArray();
            res.send(user);
        })

        ///// Delete One TourGuide
        app.delete('/tourGuidCollection/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await tourGuidCollection.deleteOne(query);
            console.log('delete user', result)
            res.json(result)
        })

        //////get Spacific TourGuide by ID

        app.get('/tourGuidCollection/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            users = await tourGuidCollection.findOne(query);
            res.send(users)
        })

        ///Update TourGuide collection by id
        app.put('/tourGuidCollection/:id', async (req, res) => {
            const id = req.params.id;
            const UpdateUser = req.body
            const filter = { _id: ObjectId(id) };
            const options = { upsert: true };
            const updateDoc = {
                $set: {
                    name: UpdateUser.name,
                    email: UpdateUser.email
                }
            };
            const result = await tourGuidCollection.updateOne(filter, updateDoc, options);
            res.json(result)
        })


        /////////////////feedBack///////////////

        app.post('/addfeedBack', async (req, res) => {
            const newUser = req.body
            const result = await tourGuidCollection.insertOne(newUser);
            console.log('New user found', req.body)
            console.log('New user added', result)
            res.json(result)
        })

        //////// Get feedback Collection

        app.get('/feedbackCollection', async (req, res) => {
            const cursor = feedbackCollection.find({});
            const user = await cursor.toArray();
            res.send(user);
        })

        ///// Delete One feedback Collection
        app.delete('/feedbackCollection/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await feedbackCollection.deleteOne(query);
            console.log('delete user', result)
            res.json(result)
        })

        //////get Spacific feedBack by ID

        app.get('/feedbackCollection/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            users = await feedbackCollection.findOne(query);
            res.send(users)
        })

        ///Update feedBack collection by id
        app.put('/feedbackCollection/:id', async (req, res) => {
            const id = req.params.id;
            const UpdateUser = req.body
            const filter = { _id: ObjectId(id) };
            const options = { upsert: true };
            const updateDoc = {
                $set: {
                    name: UpdateUser.name,
                    email: UpdateUser.email
                }
            };
            const result = await feedbackCollection.updateOne(filter, updateDoc, options);
            res.json(result)
        })




    } finally {

    }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log("Local Host", port)
})
