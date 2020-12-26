const express = require('express');

const addBookRouter = express.Router();
const Bookdata = require('../model/Bookdata');

function router(nav){
    addBookRouter.get('/',function(req,res){
    res.render("addBook",{
       nav,
       title:'Library'
    });
 });

 addBookRouter.post('/add',function(req,res){
    var item = {
      title :req.body.title,
      author:req.body.author,
      genre:req.body.genre,
      image:req.body.image
    };
    
var book = Bookdata(item);
book.save();//save to DB
res.redirect('/books');
 });

 addBookRouter.post('/update',function(req,res){
   var img = req.body.image;
   if(req.body.image == ''){
      img = req.body.oldimage;
   }
   var item = {
     title :req.body.title,
     author:req.body.author,
     genre:req.body.genre,
     image:img
   };
   
var book = Bookdata(item);
console.log(item);
const id = req.body.id;
   Bookdata.findByIdAndUpdate(id,item
).then(function(book){
    res.redirect('/books');
 })
})
 return addBookRouter;
}
 module.exports = router;