const express = require('express');
const bodyParser = require('body-parser');
var fs = require('fs');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var obj = JSON.parse(fs.readFileSync('./file.json', 'utf8'));

app.get('/.api', (request, response) => {
    response.json(obj);
});

app.post('/.api', (req, res, error) => {
    var name = request.body.name;
    var age = request.body.age;



    console.log(request.body);

    console.log('mypost');
    console.log(name, age);

    res.status(200).json({
        message: 'Got it!'
    });
});
app.listen(2020, () => {
    console.log('Sever is listening on port.');
});
