const { PORT } = require('./utilities/config')
const express = require('express');

const shopRoutes = require('./routes/shop')
const adminRoutes = require('./routes/admin')

const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.listen(PORT, 'localhost', () => {
    console.log(`Server is listening at port ${PORT}`);
});


app.use('/', shopRoutes);
app.use('/admin', adminRoutes);



