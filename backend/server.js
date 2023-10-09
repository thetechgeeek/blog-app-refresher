const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Main route running fine..');
});

app.listen(5001, () => console.log('Server running on PORT 5001.'));
