const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const books = [
    { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 2, title: '1984', author: 'George Orwell' },
    { id: 3, title: 'Pride and Prejudice', author: 'Jane Austen' },
    { id: 4, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
    { id: 6, title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling' },
    { id: 7, title: 'The Hobbit', author: 'J.R.R. Tolkien' },
    { id: 8, title: 'Moby Dick', author: 'Herman Melville' },
    { id: 9, title: 'War and Peace', author: 'Leo Tolstoy' },
    { id: 10, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien' }
];



app.get('/api/books', (req, res) => {
    res.json(books);
});

app.get('/api/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) res.status(404).send('The book was not found');
    res.json(book);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

