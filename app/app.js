const express = require('express');
const app = express();
// const mysql = require('mysql');
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


// const db = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
//   });

// db.connect((err) => {
//     if (err) {
//       console.error('Error connecting to the database:', err);
//       return;
//     }
//     console.log('Connected to the database');
//   });
  
  app.get('/api/books', (req, res) => {
    // db.query('SELECT * FROM books', (err, results) => {
    //   if (err) {
    //     return res.status(500).json({ error: err.message });
    //   }
    //   res.json(results);
    // });
    const hello = { hello : "word"}
    res.json(hello);
  });

app.get('/api/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) res.status(404).send('The book was not found');
    res.json(book);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

