// import express from 'express';  
const express = require('express');

const app = express();
const port = 4000;
app.get('/',(req,res)=>{
  res.send('Hello world');
})

app.get("/jsonp/:id",(req,res)=>{
  const callback = req.query.callback;
  const id = req.params.id;
  res.contentType('text/html;charset=UTF-8');
  callback ? res.send(`${callback}(${id})`) : res.send(id); // 返回一个回调函数的调用, 这个回调函数的名字是前端指定的.
})

app.listen(port, ()=>{
  console.log('start at port:',port)
})