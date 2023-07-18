const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api')
const { db, collection } = require('./database/db-config')
const { connect, disconnect, getDb } = require('./database/client')



const app = express();
app.use(bodyParser.json());
app.set('x-powered-by', false)
apiRoutes(app);



app.get('/', (req, res) => {
    res.send(`Hello! Let's check our /api`);
})

 

const PORT = process.env.port || 8000;
if (process.env.NODE_ENV !== 'test') {
app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}.`);
})
}
module.exports = app