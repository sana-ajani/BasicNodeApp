'use strict';
var express = require('express');
var router = express.Router();

var getPugs = function () {
    var pugs = {
        "pug1": "http://images.fanpop.com/images/polls/42662_1199318216849_full.jpg",
        "pug2": "https://i.pinimg.com/736x/48/3d/0b/483d0b2a176edf31669bd41759d8df10--toy-dog-breeds-small-dog-breeds.jpg",
        "pug3": "http://animalsbreeds.com/wp-content/uploads/2014/07/Pug-10.jpg"
    }

    return pugs;
}


/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express', message: "Yo Yo Yo", "pugs": getPugs() });
});

module.exports = router;
