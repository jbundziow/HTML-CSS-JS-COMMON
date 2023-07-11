const { db, collection } = require('../database/db-config')
const { connect, disconnect, getDb } = require('../database/client')
const {isCarDataValidated} = require('../database/db-insert-car')
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
            console.error(err);
        }
        finally {
            await disconnect();
        }
    })

    app.post('/api/newcar', async (req,res) => {
        const obj = req.body;
        let finished = true;

        if(!isCarDataValidated(obj)) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.json({statusCode: res.statusCode, statusInfo: `ERROR! You've passed wrong data!`})
        }
        else {
            //format as e.g. "23.05.2024"
            req.body.carInspectionDate = new Date(Date.parse(req.body.carInspectionDate)).toLocaleDateString('pl-PL');
            //format as e.g. "11.07.2023, 22:29:00"
            req.body.lastModified = new Date(Date.now()).toLocaleString('pl-PL');
            
            try {
            await connect();
            await getDb(db, collection).insertOne(obj);
            }
            catch(err) {
                finished = false;
                console.error(err);
            }
            finally {
                await disconnect();
                if(finished) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json({statusCode: res.statusCode, statusInfo: 'SUCCESS! Your data has been saved in the database.'})
                }
                else {
                    res.statusCode = 503;
                    res.setHeader('Content-Type', 'application/json');
                    res.json({statusCode: res.statusCode, statusInfo: `ERROR! You've passed a correct data format, but there is a problem with inserting it to the database. Try again later.`})
                }
            }
        }
    })
    
}

module.exports = apiRoutes;