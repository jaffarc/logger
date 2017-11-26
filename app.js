
const express = require('express'),
    ejs = require('ejs'),
    app = express();

require('./process')(app);
require('./app/connection/log')(app);



app.set('view engine', 'ejs');
ejs.open = '{{';
ejs.close = '}}';

app.get('/', (req, res) => {
    res.render('pages/index', { posts: null });

});

app.get('/about', (req, res) => {
    res.render('pages/about');
});

app.get('/list/error', (req, res) => {


    let error = global.dblog.model('error');
    let posts = error.find({status:true}).select({ __v: 0 }).sort({updatedAt: -1}).exec();

    posts.then((result) => {

        console.log(result);
        res.render('pages/log', { posts: result });
    });


});

app.listen(8080);
console.log('8080 is the magic port');