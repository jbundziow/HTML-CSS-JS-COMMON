const express = require('express');
const app = express();

app.set('x-powered-by', false)

app.get('/', (req, res) => {
    res.send('hello world');
})

const PORT = process.env.port || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}.`);
})