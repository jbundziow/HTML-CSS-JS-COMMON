const { PORT, session } = require('./utilities/config')
const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser')

const shopRoutes = require('./routes/shop')
const adminRoutes = require('./routes/admin')

const db = require('./utilities/database')

const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));



app.use(cookieSession({
    name: 'session',
    keys: [session.sessionKey],
    maxAge: session.sessionMaxAge,
    secure: false, // Set to true if using HTTPS
    httpOnly: true,
  }));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser());

app.listen(PORT, 'localhost', () => {
    console.log(`Server is listening at port ${PORT}`);
});


app.use('/', shopRoutes);
app.use('/admin', adminRoutes);
app.get('*', (req,res,next) => {
  res.render('404')
})


