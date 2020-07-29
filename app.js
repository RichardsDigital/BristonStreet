const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.set('view engine', 'html');
app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

app.get('/', (req, res) => {
    res.render('index.html');
});