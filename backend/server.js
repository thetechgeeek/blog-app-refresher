const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Main route running fine..');
});

const users = [];
app.post('/api/user/register', async (req, res) => {
    try {
        const { name, username, password } = req.body;
        // if already exists
        if (users.find((user) => user.username === username)) {
            return res.status(400).json({ message: 'User already exists' });
        }
        // if not: hash pw, create obj, push into arr
        const hashedPw = await bcrypt.hash(password, 10);
        users.push({
            name: name,
            username: username,
            password: hashedPw,
        });
        res.status(201).json({ message: 'User registered successfully' });
    } catch (e) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/api/user/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = users.find((user) => username === user.username);
        // if username not found
        if (!user) return res.status(404).json({ message: 'User not found' });
        // if found: unHash the pw and compare
        const passwordMatched = await bcrypt.compare(password, user.password);
        if (!passwordMatched) return res.status(401).json({ message: 'Authentication failed' });
        // if username & password matched
        res.status(201).json({ message: 'Login successful!' });
    } catch (e) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(5001, () => console.log('Server running on PORT 5001.'));
