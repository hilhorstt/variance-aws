const express = require('express');
const PORT = process.env.PORT || 3000;
const path = require('path');
const app = express();

app.use(express.static('static'))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));

});
app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}.`);
});
// Put a friendly message on the terminal
console.log('Server running at http://127.0.0.1:' + PORT + '/');
