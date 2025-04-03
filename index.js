const express = require('express');
const app = express();
const home = require('./routes/home')  
const addProduct = require('./routes/addProduct')  
const editProduct = require('./routes/editProduct')  

app.use(express.static('public'))

app.set('view engine','ejs');
app.set('views','views')


app.use('/',home)
app.use('/addProduct',addProduct)
app.use('/editProduct',editProduct)
const server = app.listen(3000, ()=>{
     console.log("Server Running...");
})