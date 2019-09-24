const express = require ('express');
const bodyParser = require('body-parser');

const userRoute = require('./routes/user.route');

const port = 3000;

const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(express.static('public'));

//Routes
app.get('/', (req, res) => res.render('index', {
    name: "pro"
}));

app.use('/users', userRoute);

app.listen(port, () => console.log('Server listening on port ' + port));