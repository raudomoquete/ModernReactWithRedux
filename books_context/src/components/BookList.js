import { useContext } from 'react';
import BooksContext from '../context/books';
import BookShow from './BookShow';

//le vamos a decir a BookList que ya no va a recibir estas props { books, onDelete, onEdit }
// ahora va a tener que alcanzar el context para tener acceso a la book list
function BookList() {
  //alzamos el context para traer la book list
  const { books } = useContext(BooksContext)
  
  const renderedBooks = books.map((book) => {
    return (
      <BookShow  key={book.id} book={book} /> //this were deleted onEdit={onEdit} onDelete={onDelete}
    );
  });

  return (
    <div className="book-list">
      {renderedBooks}
    </div>
  );
}

export default BookList;
