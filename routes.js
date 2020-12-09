//var express = require("express");
var request = require('request');
const routes = require('express').Router();
var { HOST } = require('./configure');
const axios = require('axios')
const fetch = require('node-fetch');

var base = HOST;
//var longbase = LONGHOST ;
var headers = {'Content-Type': 'application/json'} ;

routes.post('/get',function(req,res){
    const tail = req.body.tail  //req.params.tail === '1' ? '' : req.params.tail
    const headers = req.body.headers
   //  const params = req.body.data  
   //  console.log(base + '/' +tail ,{headers: headers} )
     fetch(base + '/' +tail ,
        { method: 'GET', headers : headers}
     )
    .then(res => res.json())
    .then(json => res.json(json)).
    catch(error=>{
     res.send('error='+error)
    })
     
})

routes.post('/getcustom',function(req,res){

     const tail = req.body.tail  //req.params.tail === '1' ? '' : 
     const headers = req.body.headers
     const params = req.body.data  
     console.log(base + '/' +tail + params)
     fetch(base + '/' +tail+params,
        { method: 'GET', headers : headers}
     )
    .then(res => res.json())
    .then(json => res.json(json)).
    catch(error=>{
     res.send('error='+error)
    })
})

routes.post('/post',function(req,res,next){
console.log("come to post ")
   const body = req.body.data
   const tail = req.body.tail
   const headers = req.body.headers
   console.log(base +'/'+tail)
   
      fetch(base +'/'+tail, {
        method: 'post',
        body:    JSON.stringify(body),
        headers:  headers ,
    })
    .then(res => res.json())
    .then(json => res.json(json)).
        catch(error => {
          //  console.log('There is some error');
            res.send('error')
        }); 
   
   
    
})

routes.put('/put',function(req,res){
   const body = req.body.data
   const tail = req.body.tail
   const id = req.body.id
   const headers = req.body.headers
  
   const linkBase =id === 0 ? base +'/'+tail :  base +'/'+tail+id
   //console.log(linkBase)
  // console.log(body)
fetch(linkBase, {
        method: 'put',
        body:    JSON.stringify(body),
        headers: headers,
    })
    .then(res => res.json())
    .then(json => res.json(json));
    
})

routes.delete('/delete', function(req,res) {
    const body = req.body.data
    const tail = req.body.tail
    const headers = req.body.headers
   //  console.log(base +'/'+ tail+body)
fetch(base +'/'+ tail+body, {
        method: 'delete',
      //  body:    JSON.stringify(body),
        headers: headers,
    })
    .then(res => res.text())
    .then(json => res.send(json));
    

});


module.exports = routes;