const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello Geekhunter!'));

app.listen(3000);