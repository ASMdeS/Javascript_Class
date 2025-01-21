class Book {
    constructor(title, description, author) {
        this.id = Book.nextId++;  // Usa um contador simples para IDs
        this.title = title;
        this.description = description;
        this.author = author;
    }

    static nextId = 1;  // Contador estático para gerar IDs sequenciais
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(bookInfo) {
        const { title, description, author } = bookInfo;
        const newBook = new Book(title, description, author);
        this.books.push(newBook);
        return newBook;
    }

    getBooks() {
        return this.books;
    }

    getBookById(id) {
        const book = this.books.find(book => book.id === id);
        if (!book) {
            throw new Error('Livro não encontrado');
        }
        return book;
    }

    removeBookById(id) {
        const initialLength = this.books.length;
        this.books = this.books.filter(book => book.id !== id);

        if (this.books.length === initialLength) {
            throw new Error('Livro não encontrado');
        }
    }

    updateBookById(id, info) {
        const book = this.getBookById(id);

        if (info.title !== undefined) {
            book.title = info.title;
        }
        if (info.description !== undefined) {
            book.description = info.description;
        }
        if (info.author !== undefined) {
            book.author = info.author;
        }

        return book;
    }
}

// Criar uma nova biblioteca
const biblioteca = new Library();

// Adicionar alguns livros
const livro1 = biblioteca.addBook({
    title: "Dom Casmurro",
    description: "Um clássico da literatura brasileira",
    author: "Machado de Assis"
});

const livro2 = biblioteca.addBook({
    title: "O Alquimista",
    description: "Uma fábula sobre seguir seus sonhos",
    author: "Paulo Coelho"
});

// Listar todos os livros
console.log(biblioteca.getBooks());

// Buscar um livro específico
console.log(biblioteca.getBookById(livro1.id));

// Atualizar um livro
biblioteca.updateBookById(livro1.id, {
    description: "Uma obra-prima da literatura brasileira"
});

// Remover um livro
biblioteca.removeBookById(livro2.id);