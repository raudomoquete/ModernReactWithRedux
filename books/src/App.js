import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App () {
    const [books, setBooks] = useState([]);

    const editBookById = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if (book.id == id) {
                return { ...book, title: newTitle };
            }

            return book;
        });

        setBooks(updatedBooks);
    };

    const createBook = (title) => {
        //BAD CODE!
        //lo que pasa es que el ve que books.push pertenece a la misma matriz
        //que setBooks y por eso dice que no va a actualizar el componente y por el useState([])
        //se queda vacio
      /*   books.push({ id: 123, title: title })
        setBooks(books); */
        const updateBooks = [
            ...books, // toma todos los elementos del array books y los "expande" dentro del nuevo array updateBooks
            { 
                id: Math.round(Math.random() * 9999), 
                title: title 
            }
        ];
        setBooks(updateBooks);
    };

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });

        setBooks(updatedBooks);
    };

    return (
        <div className='app'>
            <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
            <BookCreate onCreate={createBook} />
        </div>
    );
}

export default App;