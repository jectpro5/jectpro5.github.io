var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());

var books = [
    {
        name: 'AngularJS'
    },
    {
        name: 'EnberJS'
    },
    {
        name: 'ReactJS'
    }
];


app.post('/books', function (req, res) {
     books.push({
        name: req.body.name
     });
     res.send(200);
});

app.get('/books', function (req, res) {
    var books = [
        {
            name: 'AngularJS'
        },
        {
            name: 'EnberJS'
        },
        {
            name: 'ReactJS'
        }
    ];

    res.send(books);
});

var server = app.listen(3004, function () {
    console.log('backend started');
});