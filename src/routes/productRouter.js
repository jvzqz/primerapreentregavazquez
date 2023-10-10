import {Router} from 'express';
import ProductManager from '../routes/ProductManager';
import fs from 'fs';
import express from 'express';

const productRouter = Router ();

productRouter.get('/', async (res,req)=>{
try {
    const { limit } = req.query;
    let data;
  
    if (!limit) {
        data = await manager.getProducts();
    } else {
        data = await manager.getProducts().slice(0, limit);
    }
    res.json(data);
    } catch (error) {
    res.status(500).send(error.message);
    }

})

productRouter.get('/:pid', async (req,res)=>{
    try {
        const productId = req.params.pid;
        const productos = await manager.getProducts();
        const productoFilter = productos.filter(
          (product) => product.id == productId
        );
        
        if (productoFilter.length) {
          res.send(productoFilter);
        } else {    
          res.send({error: "Producto no encontrado"});
        }
      } catch (error) {
        res.status(500).send(error.message);
      }
    
})

productRouter.post('/', (req,res)=>{
    
    id: Date.now().toString();
    
    const {
        title,
        description,
        code,
        price,
        stock,
        category,
        thumbails,
    } = req.body;

    if(!title || !description || !code || !price ||!stock || !category){
       return res.status(400).json({message: 'Todos los campos son obligatorios'})
    }

    const data = fs.readFile('productos.json', 'utf-8');
    
    const products = JSON.parse(data);

    const newProduct = {
        id:DataTransfer.now().toString(),
        title,
        description,
        code,
        price,
        status: true,
        stock,
        category,
        thumbails,
    }

    products.push(newProduct);
    fs.writeFile('productos.json', JSON.stringify(products, null, 2), 'utf-8');
    res.status(200).json(newProduct);
})

productRouter.put('/:pid', (req,res)=>{
    
})

productRouter.delete('/:pid', (req,res)=>{
    
})

export default productRouter;