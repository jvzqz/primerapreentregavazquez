import express  from 'express';
import cartsRouter from './routes/cartsRouter.js';
import productRouter from './routes/productRouter.js';

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('api/products', productRouter);

app.use ('api/carts', cartsRouter);


app.listen(8080,()=>console.log('Server levantado en el puerto 8080')) 