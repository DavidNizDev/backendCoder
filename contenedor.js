const fs = require('fs');

class Contenedor {
    constructor(name) {
        this.name = name;
    }

    save = async (item) => {
        try {
            let items = await this.getAll();
            if (items.length >= 0) {
                item.id = Math.max(items.map((element) => {
                    return element.id;
                })) + 1;
            } else item.id = 0;
            items.push(item);
            await fs.promises.writeFile(this.name, JSON.stringify(items));
            console.log(item);
            return item.id;
        } catch (error) {
            console.log('Error al guardar registro');
            console.log(error);
        }
    }

    getById = async (id) => {
        try {
            let items = await this.getAll();
            let item = items.find((element) => element.id === id);
            return item ? item : null;
        } catch (error) {
            console.log('Error al obtener registro');
            console.log(error);
        }
    }

    getAll = async () => {
        try {
            let files = await fs.promises.readdir('/');
            if (!files.includes(this.name))
                await fs.promises.writeFile(this.name, JSON.stringify([]));
            return JSON.parse(await fs.promises.readFile(this.name, 'utf-8'));
        } catch (error) {
            console.log('Error al obtener los registros');
            console.log(error);
        }
    }

    deleteById = async (id) => {
        try {
            let items = await this.getAll();
            items = items.filter((element) => {
                return element.id !== id;
            });
            await fs.promises.writeFile(this.name, JSON.stringify(items));
        } catch (error) {
            console.log('Error al eliminar el registro ID: ' + id);
            console.log(error);
        }
    }

    deleteAll = async () => {
        try {
            await fs.promises.writeFile(this.name, JSON.stringify([]));
        } catch (error) {
            console.log('Error al eliminar los registros');
            console.log(error);
        }
    }
}
let contenedor = new Contenedor('productos.txt')

let prod1 = {
    title: "Grains of sand",
    price: "2456",
    thumbnail: "http://urlDeLaFoto.com.ar"
}
let prod2 = {
    title: "No cabía duda",
    price: "56",
    thumbnail: "http://urlDeLaFoto.com.ar"
}

contenedor.save(prod2);
contenedor.save(prod1);


//module.exports = Contenedor;