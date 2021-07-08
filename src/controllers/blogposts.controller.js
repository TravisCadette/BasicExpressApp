const axios = require('axios');

exports.findAll = (req, res) => {
    // call json placeholder API
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(apicall => {
        res.send(apicall.data);
    })
};

exports.findById = (req, res) => {
  axios.get(
      "https://jsonplaceholder.typicode.com/posts/" + req.params.id)
    .then((apicall) => {
      res.send(apicall.data);
    });
};