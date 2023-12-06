
class ProductManager{
    static ultId = 0;

    constructor(){
        this.products = [];
        
    }


    addProduct(title, description, price, img, code, stock){

        if(!title || !description || !price || !img || !code || !stock) 
        {
           console.log("Completar todos los campos");
           return; 
        }
        if(this.products.some(item => item.code === code)){
            console. log("El codigo debe ser unico");
            return;
        }

        const newProduct = {
            id: ++ProductManager.ultId,
            title,
            description,
            price,
            img,
            code,
            stock
        }
    
        this.products.push(newProduct);

    }

    getProducts(){
        console.log(this.products);
    }

    getProductById(id){
        const product = this.products.find(item => item.id === id);

        if(!product){
            console.log("Producto no encontrado");
        } else {
            console.log("Producto encontrado", product);
        }
    }

}

const manager = new ProductManager();

manager.getProducts();

manager.addProduct("producto prueba", "es un producto prueba", 200, "Sin imagen", "abc123", 25);



manager.addProduct("Perfume", "Hombre", 100, "Sin imagen", "abc124", 3);

manager.getProducts();

manager.getProductById(4);