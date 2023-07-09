const { db, collection } = require('../database/db-config')
const { connect, disconnect, getDb } = require('../database/client')
const {carDataIsValidated} = require('../database/db-insert-car')
const apiRoutes = (app) => {

    app.get('/api', (req,res) => {
        res.send('hello api')
    })

    app.get('/api/show', async (req,res) => {
        try {
        await connect();
        const result = await getDb(db, collection).find().toArray();
        res.setHeader('Content-Type', 'application/json');
        res.json(result);
        }
        catch(err) {
            console.error(error);
        }
        finally {
            await disconnect();
        }
    })

    app.post('/api/newcar', (req,res) => {
        console.log(req.body);
        console.log(carDataIsValidated(req.body));
        if(!carDataIsValidated(req.body)) {
            res.statusCode = 404;
            res.json({error: 'bad data'})
        }
        // console.log(req.headers);
        let timestamp = Date.parse('2017-10-23');
        console.log(timestamp);
        let xx;
        if (isNaN(timestamp)) {
            xx="Invalid date format";
        } else {
            xx="Valid date format";
        }
        res.send(xx)
    })
    
}

module.exports = apiRoutes;