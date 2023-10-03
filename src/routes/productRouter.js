import {Router} from 'express';
const fs = require ('fs');
const express = require('express');

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

productRouter.get('/:pid', async (res,req)=>{
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

productRouter.post('/', (req, res)=>{
    
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

productRouter.put('/:pid', (res,req)=>{
    
})

productRouter.delete('/:pid', (res,req)=>{
    
})

export default productRouter;