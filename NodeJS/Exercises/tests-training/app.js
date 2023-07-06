const express = require('express');
const apiRoutes = require('./routes/api')


const app = express();
app.set('x-powered-by', false)
apiRoutes(app);

app.get('/', (req, res) => {
    res.send('hello world');
})

const PORT = process.env.port || 8000;
app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}.`);
})

// exports.app = app;
module.exports = app