var bodyparser = require('body-parser');

module.exports = function(app){

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));

    app.post('/api/imageurl', function(req,res){
        url = req.body.url;
    })
}