const fs = require('fs');
class Contenedor {
    constructor(filename) {
        this.id = 0;
        this.file = filename;
        this.productList = [];
    }

    async init() {
        console.log(`inicio el archivo`);
        const data = await fs.readFileSync(this.file);
        const dataProducts = JSON.parse(data);
        for (const element of dataProducts) {
            this.productList.push(element)
        }
        console.log("file loaded")
    }

    async getAll() {
        let allProducts = JSON.stringify(this.productList);
        console.log('se ejecutó get all ');
        return allProducts;
    }

    async save(object) {
        this.id++;
        object['id'] = this.id;
        this.productList.push(object);
        await this.write();
        return this.id;
    }

    async write() {
        let string = JSON.stringify(this.productList);
        await fs.promises.writeFile(this.file, string);
    }

    async deleteAll() {
        this.productList = [];
        await this.write();
    }

    async addProduct(obj) {
        obj.id = ++this.id
        this.productList.push(obj)
        return obj
    }

    async getById(searcheId) {
        let searchedProduct = this.productList.find(el => el.id == searcheId);
        return searchedProduct;
    }

    async deleteById(id) {
        const index = this.productList.findIndex(producto => producto.id === parseInt(id));
        if (index === -1) {
            return 'no existe el id buscado';
        }
        this.productList.splice(index, 1);
        return `el producto con id ${id} fue eliminado correctamente`
    }

    async update(id, obj) {
        const index = this.productList.findIndex((objB) => objB.id == id)
        obj.id = this.productList[index] = obj
        return obj
    }
}

module.exports = Contenedor;