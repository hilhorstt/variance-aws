const express = require('express');
const PORT = process.env.HTTP_PORT || 4001;
const app = express();
app.get('/', (req, res) => {
    res.send('Variance Solutions');
});
app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}.`);
});
