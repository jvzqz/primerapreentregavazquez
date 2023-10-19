import fs from 'fs';


class ProductManager {

    constructor(){
        this.path = 'products.json';
        this.products = [];
        this.id = 1;
    } 

    addProduct (tittle, description, price, thumbnail, code, stock) {
        for (let i=0; i< this.products.length; i++){
            if(this.products[i]["code" === code]){
                console.log ("El código está repetido");
                return;
            }
        }
        if (!tittle || !description || !price || !thumbnail || !code || !stock){
            console.error ("Los campos son obligatorios");
            return;
        
        }
        const product = {
            id: this.id++,
            tittle,
            description,
            price,
            thumbnail,
            code,
            stock,
          };
        
        this.products.push (product);
          
        const productos = JSON.stringify(this.products, null, 2);
        fs.writeFileSync(this.path, productos, "utf-8");
        console.log ("Producto agregado correctamente");
    }
    

    getProducts() {
      try {
      const productos = fs.readFileSync(this.path, "utf8");
      return JSON.parse(productos);
      } catch (error) {
        return this.products;
      }
    }
    

    getProductById(id) {
       const exist = this.products.find((product) => product.id == id);
       !exist ? console.log("Not Found") : false;
       return exist;
    }
    
    updateProducts(id, updateData) {
    
        const productIndex = this.products.findIndex((product) => product.id === id);
        
        if (productIndex !== -1) {
           this.products[productIndex] = { ...this.products[productIndex], ...updateData };
           const productsJSON = JSON.stringify(this.products, null, 2);
           fs.writeFileSync(this.path, productsJSON, 'utf-8');
           console.log("Product actualizado correctamente");
        } else {
            console.log("Product no encontrado");
        } 
    }
     

    deleteProducts(id) {
        const productIndex = this.products.findIndex(
          (product) => product.id === id
        );
        if (productIndex !== -1) {
          this.products.splice(productIndex, 1);
          const productsJSON = JSON.stringify(this.products, null, 2);
          fs.writeFileSync(this.path, productsJSON, "utf-8");
          console.log("Producto eliminado correctamente");
        } else {
          console.log("Producto no encontrado");
        }
    }
  
}

const manager = new ProductManager()
manager.getProductById(1)

export default ProductManager;