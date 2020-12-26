const express = require('express');

const app = express();
const port = process.env.PORT || 2000;
const nav = [
   {link:'/books',name:'Books'},
   {link:'/authors',name:'Authors'},
   {link:'/signUp',name:'signUp'},
   {link:'/login',name:'login'},
   {link:'/admin',name:'add Book'}
];
const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const signUpRouter = require('./src/routes/signUpRoutes')(nav);
const loginRouter = require('./src/routes/loginRoutes')(nav);
const addBookRouter = require('./src/routes/addBookRoutes')(nav);

app.use(express.urlencoded({extended : true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');

app.use('/books',booksRouter);
app.use('/admin',addBookRouter);
app.use('/authors',authorsRouter);
app.use('/login',loginRouter);
app.use('/signUp',signUpRouter);

app.get('/',function(req,res){
   res.render("index",
   {
      nav,
      title:'Library'
   });
});


app.listen(port,()=>{console.log("Server ready at " + port)});