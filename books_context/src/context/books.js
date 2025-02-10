import { createContext, useState } from 'react';
import axios from 'axios';

//Create context:
const BooksContext = createContext();

//define the component Provider:
function Provider({ children }) {  //Custom Provider
    const [books, setBooks] = useState([]);
    
      const fetchBooks = async () => {
        try {
          const response = await axios.get('http://localhost:3000/books');
          setBooks(response.data);
        } catch (error) {
          console.error('Error fetching books:', error);
        }
      };

      const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3000/books/${id}`, {
          title: newTitle,
        });
    
        const updatedBooks = books.map((book) => {
          if (book.id === id) {
            return { ...book, ...response.data };
          }
    
          return book;
        });
    
        setBooks(updatedBooks);
      };
    
      const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3000/books/${id}`);
    
        const updatedBooks = books.filter((book) => {
          return book.id !== id;
        });
    
        setBooks(updatedBooks);
      };
    
      const createBook = async (title) => {
        const response = await axios.post('http://localhost:3000/books', {
          title,
        });
    
        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks);
      };

   // const [count, setCount] = useState(0);

    const valueToShare = {  //Object we want to share with all our components
      //count: count, //si las llaves count y los valores son identicos en este caso (count) se puede dejar un solo
      books,
      deleteBookById,
      editBookById,
      createBook,
      fetchBooks
    };

    return (                            //Object we want to share with all our components
        <BooksContext.Provider value={ valueToShare }>
            {children}
        </BooksContext.Provider>
    );
}

export { Provider };
export default BooksContext;

// Razon detras de export { Provider }

/* Modularidad: Exportar Provider de manera nombrada facilita la modularidad del código. 
Permite importar solo el Provider donde sea necesario 
sin importar automáticamente el contexto BooksContext. */
//ejemplo:
//import { Provider } from './BooksContextFile';

/* Reusabilidad: Otros componentes pueden necesitar utilizar el contexto 
sin utilizar directamente el Provider. Por lo tanto, 
exportar BooksContext por defecto permite que otros componentes consuman el contexto 
sin tener que envolverlos en el Provider. */
//ejemplo:
//import BooksContext from './BooksContextFile';
