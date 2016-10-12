var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
 'article-one' : {
    title:'Article one',
    heading:'Article-one',
    date:'sept 5,2016',
    content:
    `<p>kjdfkljgkjgksjgksj</p>`
},
 'article-two':{
    title:'Article one',
    heading:'Article-one',
    date:'sept 5,2016',
    content:
    `<p>kjdfkljgkjgksjgksj</p>`
    
},
'article-three':{
    title:'Article one',
    heading:'Article-one',
    date:'sept 5,2016',
    content:
    `<p>kjdfkljgkjgksjgksj</p>`
}
};
function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;


var htmltemplate=`
<html>
    <head>
        ${title}
    </head>
    <body>
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
    </body>
</html>

`;
 return htmltemplate;   
}    


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/articleName',function(req, res){
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
