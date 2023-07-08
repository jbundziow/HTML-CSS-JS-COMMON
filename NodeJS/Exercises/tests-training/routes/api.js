const { db, collection } = require('../database/db-config')
const { connect, disconnect, getDb } = require('../database/client')

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
    
}

module.exports = apiRoutes;