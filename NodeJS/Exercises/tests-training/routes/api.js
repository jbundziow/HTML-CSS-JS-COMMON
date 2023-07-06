const {main} = require('../database/client')

const apiRoutes = (app) => {

    app.get('/api', (req,res) => {
        res.send('hello api')
    })

    app.get('/api/show', (req,res) => {
        main();
        res.send('hello cars')
    })
    
}

module.exports = apiRoutes;