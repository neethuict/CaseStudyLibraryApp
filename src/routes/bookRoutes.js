const express = require('express');
const Bookdata = require('../model/Bookdata');

const booksRouter = express.Router();

function router(nav){

// var books = [
//     {
//        title:'Cindrella',
//        author:'Author X',
//        genre:'Cartoon',
//        img:'cindrella.jpg' 
//     },
//     {
//        title:'Snow white',
//        author:'Author Y',
//        genre:'Cartoon',
//        img:'snowwhite.jpg'
//     },
//     {
//        title:'Red Riding Hood',
//        author:'Author Z',
//        genre:'Cartoon',
//        img:'redriding.jpg'
//     }
//  ];
 booksRouter.get('/',function(req,res){
    Bookdata.find()
    .then(function(books){
      res.render("books",{
         nav,
         title:'Library',
         books
      });
    })
  
 });
 
 booksRouter.get('/:id',function(req,res){
    const id = req.params.id;
    Bookdata.findOne({_id:id})
    .then(function(book){
      res.render('book',{
         nav,
          title:'Library',
          book
       })
    })
 });

 booksRouter.get('/delete/:id',function(req,res){
   const id = req.params.id;
   Bookdata.findOneAndDelete({_id:id})
   .then(function(book){
      res.redirect('/books');
   })
});

booksRouter.get('/edit/:id',function(req,res){
   const id = req.params.id;
   Bookdata.findOne({_id:id})
   .then(function(book){
     res.render('updateBook',{
        nav,
         title:'Library',
         book
      })
   })
});


 return booksRouter;
}
 module.exports = router;