const { db, collection } = require('../database/db-config')
const { connect, disconnect, getDb, getObjectId } = require('../database/client')
const {isCarDataValidated, isIDcorrect, isPutObjectValidated} = require('../database/dataValidation')
const {sortQuery, areSortQueriesValidated} = require('../database/sortQuery');

const apiRoutes = (app) => {
    
    app.get('/api/show', async (req,res) => {
        let statusCode, statusInfo;
        let result;
        try {
        await connect();
        if(Object.entries(req.query).length !== 0) {
            if(areSortQueriesValidated(req.query)) {
                result = await sortQuery(req.query.sort, req.query.term)
                statusCode = 200;
            }
            else {
                statusCode = 404;
                statusInfo = 'You passed a wrong query in URL!';
            }
        }
        else {
            result = await getDb(db, collection).find().sort({_id: -1}).toArray();
            statusCode = 200;
        }
        
        if (result.length > 0) {
            statusInfo = 'OK';
        }
        else {
            statusInfo = 'Not found any data with these filters.';
        }
        }
        catch(err) {
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

    app.delete('/api/delete/:id', async (req,res) => {
        let statusCode, statusInfo;
        let mongoID;
        if(isIDcorrect(req.params.id)) {
            mongoID = getObjectId(req.params.id)
            try {
                await connect();
                result = await getDb(db, collection).find({_id: mongoID}).toArray();
                
                if (result.length === 1) {
                    await getDb(db, collection).deleteOne({_id: mongoID});
                    statusCode = 200;
                    statusInfo = 'Entry in the database has beed successfully deleted.'
                }
                else {
                    statusCode = 200;
                    statusInfo = 'Not found entry in database of this ID.'
                }
                
                }
                catch(err) {
                    statusCode = 404;
                    statusInfo = 'Something went wrong...';
                    console.error(err);
                }
                finally {
                    await disconnect();
                    res.setHeader('Content-Type', 'application/json');
                    res.statusCode = statusCode;
                    res.json({statusCode, statusInfo})
                }
        }
        else {
            statusCode = 400;
            statusInfo = 'You passed a wrong ID!';
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = statusCode;
            res.json({statusCode, statusInfo})
        }
        
    })


    app.put('/api/update', async (req, res) => {
        let statusCode, statusInfo;
        let resultOfUpdate;
        if(isPutObjectValidated(req.body)) {
            try {
                const {_id, brand, model, carInspectionDate} = req.body;
                await connect();
                resultOfUpdate = await getDb(db, collection).updateOne(
                { _id: getObjectId(_id) },
                {
                    $set: {
                    brand: brand,
                    model: model,
                    carInspectionDate: new Date(Date.parse(carInspectionDate)).toLocaleDateString('pl-PL'),
                    lastModified: new Date(Date.now()).toLocaleString('pl-PL')
                    }
                })
            }
            catch(err) {
                statusCode = 404;
                statusInfo = 'Something went wrong...';
                console.error(err);
            }
            finally {
                await disconnect();
                if(resultOfUpdate.hasOwnProperty('modifiedCount')) {
                    if(resultOfUpdate.modifiedCount === 1) {
                        statusCode = 200;
                        statusInfo = 'Successfully updated record in the database.';
                    }
                    else {
                        statusCode = 500;
                        statusInfo = `Nothing changed in the database... Maybe you passed a wrong ID?`;
                    }
                }
                else {
                    statusCode = 404;
                    statusInfo = 'Something went wrong...';
                }
            }
            

        }
        else {
            statusCode = 400;
            statusInfo = `You've passed a wrong object in body! Check your data and try again.`;
        }

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = statusCode;
    res.json({statusCode, statusInfo})
    })
    
    app.get('*', (req,res) => {
        res.json({statusCode: 404, statusInfo: 'Error 404: Check if your link is correct.'})
    })
}

module.exports = apiRoutes;