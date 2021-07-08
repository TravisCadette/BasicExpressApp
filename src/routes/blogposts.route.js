module.exports = app => {
    const router = require('express').Router();
    const controller = require('../controllers/blogposts.controller');

    router.get('/', controller.findAll);

    router.get('/:id', controller.findById);

    // router.get('/', function(req, res){
    //     res.send('You have reached the router handler for get all blog posts')
    // });

    app.use('/api/blogposts/', router);
}