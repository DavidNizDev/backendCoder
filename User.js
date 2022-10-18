class User {
    constructor(name, lastName, books, pets) {
        this.name = name;
        this.lastName = lastName;
        this.pets = [];
        this.books = [];
    }

    getFullName() {
        return `Full name: ${this.name} ${this.lastName}`
    }

    addPet(pet) {
        this.pets.push(pet)
    }
    countPets() {
        return ("Quantity of pets: " + Number(this.pets.length))
    }
    addBook(bookName, author) {
        this.books.push({ bookName, author })
    }
}

const Usuario = new User("Señorito", "Inglés");
Usuario.addPet("Comodo's Dragon");
Usuario.addPet("Dog");
Usuario.addPet("Bear");
Usuario.addBook("El gran Libro", "Liam Libruli");
Usuario.addBook("Libras papiras", "Don Livron");
console.log(Usuario);
console.log(Usuario.getFullName());
console.log(Usuario.countPets());

