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

app.post('/register/signup', async function (req, res) {
  let conn;
  try {
    conn = await client.connect();
    const db = conn.db('Freelearn');
    const collection = db.collection('register');

    const result = await collection.insertOne(req.body);

    await conn.close();

    res.status(200).json({ message: 'Registered successfully', result });
  } catch (err) {
    if (conn) await conn.close();
    res.status(500).json({ error: 'Failed to Register', details: err.message });
  }
});

/*app.post('/login/signin', async function (req, res) {
  let conn;
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      console.log('Email or password missing');
      return res.status(400).json({ error: 'Email and password are required' });
    }

    conn = await client.connect();
    const db = conn.db('Freelearn');
    const collection = db.collection('register');

    const user = await collection.findOne({ email });

    if (!user) {
      console.log('User not found');
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const passwordMatch = user.password === password;

    if (!passwordMatch) {
      console.log('Password mismatch');
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    console.log('Login successful for user:', email);
    res.status(200).json({ message: 'Login successful' });
    await conn.close();
  } catch (err) {
    if (conn) await conn.close();
    console.error('Error in login route:', err.message); // Log error details
    res.status(500).json({ error: 'Failed to login', details: err.message });
  }
});*/
app.post('/login/signin', async function (req, res) {
  let conn;
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    conn = await client.connect();
    const db = conn.db('Freelearn');
    const collection = db.collection('register');

    const user = await collection.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const passwordMatch = user.password === password;

    if (!passwordMatch) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    console.log('Login successful for user:', email);

    // Send full user details (excluding sensitive fields like password)
    res.status(200).json({
      message: 'Login successful',
      user: {
        firstname: user.firstName,
        name: user.lastName,
        email: user.email,
      },
    });

    await conn.close();
  } catch (err) {
    if (conn) await conn.close();
    console.error('Error in login route:', err.message);
    res.status(500).json({ error: 'Failed to login', details: err.message });
  }
});

app.post('/contact/submit', async function (req, res) {
  let conn;
  try {
    conn = await client.connect();
    const db = conn.db('Freelearn');
    const collection = db.collection('contact');

    const result = await collection.insertOne(req.body);

    await conn.close();

    res.status(200).json({ message: 'Contact saved successfully', result });
  } catch (err) {
    if (conn) await conn.close();
    res
      .status(500)
      .json({ error: 'Failed to save contact', details: err.message });
  }
});

app.get('/userprofile/get', async function (req, res) {
  let conn;
  try {
    conn = await client.connect();
    const db = conn.db('Freelearn');
    const collection = db.collection('register');

    // Fetch all user details
    const users = await collection
      .find({}, { projection: { firstname: 1, name: 1, email: 1, _id: 0 } })
      .toArray();

    if (users.length > 0) {
      res.status(200).json(users);
    } else {
      res.status(404).json({ message: 'No users found' });
    }
  } catch (error) {
    console.error('Error fetching user profiles:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    if (conn) await conn.close();
  }
});
