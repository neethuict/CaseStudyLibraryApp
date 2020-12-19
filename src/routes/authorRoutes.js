const express = require('express');

const authorsRouter = express.Router();

function router(nav){

var authors = [
    {
       title:'Poet',
       author:'Author X',
       img:'authorx.jpg'
    },
    {
       title:'Novelist',
       author:'Author Y',
       img:'authory.jpg'
    },
    {
       title:'Short story writer',
       author:'Author Z',
       img:'authorz.jpg'
    }
 ];
 authorsRouter.get('/',function(req,res){
    res.render("authors",{
       nav,
       title:'Library',
       authors
    });
 });
 
 authorsRouter.get('/:id',function(req,res){
    const id = req.params.id;
    res.render('author',{
      nav,
       title:'Library',
       author:authors[id]
    })
 });

 return authorsRouter;
}
 module.exports = router;