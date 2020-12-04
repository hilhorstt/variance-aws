const express = require('express');
const PORT = process.env.HTTP_PORT || 3000;
const path = require('path');
const app = express();
const cors = require('cors');

app.use(cors())
app.use(express.static('static'))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));

});
app.get('/projects', (req, res) => {
    res.send('<html><body><h1>Projects</h1></body></html>');
});
app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}.`);
});
// Put a friendly message on the terminal
console.log('Server running at http://127.0.0.1:' + PORT + '/');
