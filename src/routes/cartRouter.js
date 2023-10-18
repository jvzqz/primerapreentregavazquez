import {Router} from 'express';
import CartManager from '../CartManager'

const cartRouter = Router ();

cartRouter.post('/', (req,res)=>{
    const { cid } = req.params;
    const newCart = CartManager.createCart(parseInt(cid));
    res.json(newCart);  
});

cartRouter.get('/:cid', (req,res)=>{
    const { cid } = req.params;
    const cart = CartManager.getCardbyId(parseInt(cid));
    if (cart) {
       res.json(cart)
    } else {
       res.status(404).json({ error: 'Carrito no encontrado' });
    }   
});

cartRouter.post('/:cid/products/:pid', (req,res)=>{
    const { cid,pid } = req.params;
    const { quantity } = req.body;
    const success = CartManager.addProductToCart(parseInt(cid), parseInt(pid), quantity);
    if (success) {
      res.json({ message: 'Producto agregado al carrito con éxito' });
    } else {
      res.status(404).json({ error: 'Carrito o producto no encontrado' });
    }
});

routerCart.get('/:cid/products', (req, res) => {
    const { cid } = req.params;
    const products = CartManager.getProductsInCart(parseInt(cid));
    res.json(products);
});

routerCart.delete('/:cid/product/:pid', (req, res) => {
    const { cid, pid } = req.params;
    const success = CartManager.removeProductFromCart(parseInt(cid), parseInt(pid));
    if (success) {
     res.json({ message: 'Producto eliminado del carrito con éxito' });
    } else {
     res.status(404).json({ error: 'Carrito o producto no encontrado en el carrito' });
    }
});
  
export default cartRouter; 