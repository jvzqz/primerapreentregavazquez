import express  from 'express';
import __dirname from './utils.js';
import handlebars from 'express-handlebars';
import cartsRouter from './routes/cartsRouter.js';
import productRouter from './routes/productRouter.js';
import { Server } from 'socket.io';

const app = express();
const httpServer = app.listen(8080,()=>console.log('Server levantado en el puerto 8080')) 

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('api/products', productRouter);

app.use ('api/carts', cartsRouter);

const socketServer = new Server(httpServer);

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname+'views');
app.set('view engine', 'handlebars');
app.use(express.static(__dirname+'/public'));
app.use('/', viewsRouter);
