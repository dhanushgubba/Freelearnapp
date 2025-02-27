const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on the port number ${PORT}`));

const uri =
  'mongodb+srv://dhanush:dhanush@cluster0.ar7z0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(uri);

app.get('/klef/test', async function (req, res) {
  res.json('Koneru Lakshmaiah Education Foundation');
});

app.post('/klef/cse', async function (req, res) {
  res.json(req.body);
});

app.get('/', (req, res) => {
  res.send('Welcome to Free Learn App!');
});
