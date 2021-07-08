const express = require('express');

const app = express();

app.get('/', function(req, res) {
    res.send('This is the top route in the Blog Post API')
})

require('./src/routes/blogposts.route')(app);

require("./src/routes/user.route")(app);

app.listen(3000, function() {
    console.log('Listening on port 3000')
})