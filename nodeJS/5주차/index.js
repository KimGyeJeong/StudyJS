const express = require('express');
const path = require("path");

const app = express();

app.set('port', process.env.PORT || 5000);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(app.get('port'), () => {
    console.log(`Server started on port ${app.get('port')}`);
})