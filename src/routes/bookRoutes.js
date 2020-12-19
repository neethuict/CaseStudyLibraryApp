const express = require('express');

const booksRouter = express.Router();

function router(nav){

var books = [
    {
       title:'Cindrella',
       author:'Author X',
       genre:'Cartoon',
       img:'cindrella.jpg'
    },
    {
       title:'Snow white',
       author:'Author Y',
       genre:'Cartoon',
       img:'snowwhite.jpg'
    },
    {
       title:'Red Riding Hood',
       author:'Author Z',
       genre:'Cartoon',
       img:'redriding.jpg'
    }
 ];
 booksRouter.get('/',function(req,res){
    res.render("books",{
       nav,
       title:'Library',
       books
    });
 });
 
 booksRouter.get('/:id',function(req,res){
    const id = req.params.id;
    res.render('book',{
      nav,
       title:'Library',
       book:books[id]
    })
 });

 return booksRouter;
}
 module.exports = router;