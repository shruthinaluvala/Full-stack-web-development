///import express =require('express')
const express=require('express')
const port=3000
app.use(express.json())


app.get('/',(req,res)=> res.status(200).json({message:"Welcome"})


app.listen(port,(()=>console.log(`Listening on ${port}`)))

