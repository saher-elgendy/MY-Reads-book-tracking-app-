import React, { Component } from 'react';
import Book from './Book';

class BookShelf extends React.Component {
  render() {
  const {books, name, onChangeShelf} = this.props;

	return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ name }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => <li key={book.id}>
               <Book          
                 book={ book }
                 books={ books }
                 onChangeShelf={ onChangeShelf }/>
            </li>)}      
          </ol>
        </div>
      </div>
	)
 }
}

export default BookShelf;