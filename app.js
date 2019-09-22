const express = require("express")
const path = require('path')

// init app
const app = express()

// load view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')


// home route
app.get('/', function(req, res){
  let articles = [
    {
      id: 1,
      title: "Article 1",
      author: 'jasterix',
      body: 'This is an article'
    },
    {
      id: 2,
      title: "Article 2",
      author: 'other',
      body: 'This is an article'
    },
    {
      id: 3,
      title: "Article 3",
      author: 'jasterix',
      body: 'This is an article'
    },
    {
      id: 4,
      title: "Article 4",
      author: 'someone new',
      body: 'This is an article'
    }
  ]
  res.render('index', {
    title: 'Articles',
    articles: articles
  })
})

// add route
app.get('/articles/add', function(req, res){
  res.render('add_article', {
    title: 'Add article'
  })
})


// start server
app.listen(3000, function(){
  console.log("Server started on port 3000...")
})
