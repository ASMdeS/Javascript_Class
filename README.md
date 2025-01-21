# Javascript_Class

# Sistema de Gerenciamento de Biblioteca

Um sistema simples para gerenciar uma biblioteca de livros, implementado em JavaScript. O sistema permite adicionar, remover, atualizar e consultar livros em uma biblioteca.

## Funcionalidades

- Criação de livros com título, descrição e autor
- Geração automática de IDs sequenciais para cada livro
- Gerenciamento completo da biblioteca (adicionar, remover, atualizar, listar e buscar livros)
- Tratamento de erros para operações inválidas

## Classes

### Book

Representa um livro individual no sistema.

#### Propriedades:
- `id` (number): Identificador único do livro, gerado automaticamente
- `title` (string): Título do livro
- `description` (string): Descrição do livro
- `author` (string): Autor do livro

### Library

Gerencia uma coleção de livros.

#### Métodos:
- `addBook(bookInfo)`: Adiciona um novo livro à biblioteca
- `getBooks()`: Retorna lista completa de livros
- `getBookById(id)`: Busca um livro específico pelo ID
- `removeBookById(id)`: Remove um livro pelo ID
- `updateBookById(id, info)`: Atualiza informações de um livro

## Como Usar

### Instalação

```javascript
// Copie as classes Book e Library para seu projeto
```

### Exemplos de Uso

1. Criar uma nova biblioteca:
```javascript
const biblioteca = new Library();
```

2. Adicionar um livro:
```javascript
const novoLivro = biblioteca.addBook({
    title: "Dom Casmurro",
    description: "Um clássico da literatura brasileira",
    author: "Machado de Assis"
});
```

3. Listar todos os livros:
```javascript
const todosLivros = biblioteca.getBooks();
console.log(todosLivros);
```

4. Buscar um livro específico:
```javascript
const livro = biblioteca.getBookById(1);
```

5. Atualizar informações de um livro:
```javascript
const livroAtualizado = biblioteca.updateBookById(1, {
    description: "Nova descrição do livro"
});
```

6. Remover um livro:
```javascript
biblioteca.removeBookById(1);
```

## Tratamento de Erros

O sistema lança erros nas seguintes situações:
- Tentativa de buscar um livro com ID inexistente
- Tentativa de remover um livro com ID inexistente
- Tentativa de atualizar um livro com ID inexistente

## Exemplo Completo

```javascript
const biblioteca = new Library();

// Adicionar livros
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

// Atualizar um livro
biblioteca.updateBookById(livro1.id, {
    description: "Uma obra-prima da literatura brasileira"
});

// Remover um livro
biblioteca.removeBookById(livro2.id);
```

## Contribuição

Sinta-se à vontade para contribuir com melhorias para este sistema. Algumas sugestões:
- Adicionar validação de dados de entrada
- Implementar persistência de dados
- Adicionar mais métodos de busca (por autor, título, etc.)
- Implementar ordenação de livros
- Adicionar categorias/gêneros aos livros