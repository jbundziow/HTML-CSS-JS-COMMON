const { db, collection } = require('../database/db-config')
const { connect, disconnect, getDb, getObjectId } = require('../database/client')
const {isCarDataValidated, isIDcorrect} = require('../database/dataValidation')

const apiRoutes = (app) => {

    // app.get('/api', (req,res) => {
    //     res.send('hello api')
    // })

    app.get('/api/show', async (req,res) => {
        let finished = true;
        let statusCode, statusInfo;
        let result;
        console.log(req.query);

        try {
        await connect();
        result = await getDb(db, collection).find().toArray();
        
        statusCode = 200;
        if (result.length > 0) {
            statusInfo = 'OK';
        }
        else {
            statusInfo = 'Not found any data with these filters.';
        }
        }
        catch(err) {
            finished = false;
            statusCode = 404;
            statusInfo = 'Something went wrong...';
            console.error(err);
        }
        finally {
            await disconnect();

            res.setHeader('Content-Type', 'application/json');
            res.statusCode = statusCode;
            const resultObj = {
            statusCode: statusCode,
            statusInfo: statusInfo,
            data: result
            }
            res.json(resultObj);
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
                res.setHeader('Content-Type', 'application/json');
                if(finished) {
                    res.statusCode = 200;
                    res.json({statusCode: res.statusCode, statusInfo: 'SUCCESS! Your data has been saved in the database.'})
                }
                else {
                    res.statusCode = 503;
                    res.json({statusCode: res.statusCode, statusInfo: `ERROR! You've passed a correct data format, but there is a problem with inserting it to the database. Try again later.`})
                }
            }
        }
    })

    app.get('/api/delete/:id', async (req,res) => {
        let statusCode, statusInfo;
        let mongoID;
        console.log(typeof req.params.id)
        console.log(req.params.id)
        console.log(isIDcorrect(req.params.id))
        if(isIDcorrect(req.params.id)) {
            mongoID = getObjectId(req.params.id)
            res.json('ok');
        }
        else {
            statusCode = 200;
            statusInfo = 'You passed a wrong ID!';
            res.json({statusCode, statusInfo})
        }
    })
    
    app.get('*', (req,res) => {
        res.json({statusCode: 404, statusInfo: 'Error 404: Check if your link is correct.'})
    })
}

module.exports = apiRoutes;