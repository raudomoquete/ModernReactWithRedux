import { useState, useEffect } from 'react';
import axios from 'axios';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');

    setBooks(response.data);
  };

  // DONT DO THIS: esto crearia un bucle infinito (el real bug)
  //fetchBooks();
  // para evitar esa mala practica usamos useEffect
  useEffect(() => { //pasamos un arrow function (1er argumento) que es llamado inmediatamente luego de el primer renderizado
    fetchBooks();
  }, []); // el [] es el segundo argumento y depende de este segundo argumento si la funcion que pasamos como primero argumento es llamada en los renderizados posteriores al primero
 // si ponemos un array vacio como segundo argumento la funcion que pasamos como primer argumento no va a ser llamada mas nunca
 
  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
     // title : title // como la llave (key) y el value son identicos podemos dejar solo uno
        title
    });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);

   /* esto es para crear el libro manualmente 
   const updatedBooks = [
      ...books,
      {
        id: Math.round(Math.random() * 9999),
        title,
      },
    ];
    setBooks(updatedBooks); */
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
