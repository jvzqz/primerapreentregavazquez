const express = require('express');
const fs = require ('fs');
const cartsRouter = require('./routes/cartsRouter');
const productRouter = require('./routes/productRouter');

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const productRouter = express.productRouter();
app.use('api/products', productRouter);

const cartsRouter = express.cartsRouter ();
app.use ('api/carts', cartsRouter);


app.listen(8080,()=>console.log('Server levantado en el puerto 8080')) 