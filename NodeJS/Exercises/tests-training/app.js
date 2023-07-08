const express = require('express');
const apiRoutes = require('./routes/api')
const { db, collection } = require('./database/db-config')
const { connect, disconnect, getDb } = require('./database/client')

const app = express();
app.set('x-powered-by', false)
apiRoutes(app);

app.get('/', async (req, res) => {
    await connect();
    await getDb(db, collection).insertOne({name: 'oskar', surname: 'nowak'});
    await disconnect();
    res.send('hello world');
})

 

const PORT = process.env.port || 8000;
app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}.`);
})

module.exports = app