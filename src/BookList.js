import React, { Component } from 'react';
import BookShelf from './BookShelf';

class BookList extends React.Component {

  bookStates = [
    {
      readingState: 'currentlyReading',
      shelfName: 'Currently reading'
    },

    {
      readingState: 'read',
      shelfName: 'read'
    },

    {
      readingState: 'wantToRead',
      shelfName: 'Want to read'
    }
  ]

	render() {
   const changeShelf = this.props.onChangeShelf;

	  return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
         </div>
         <div className="list-books-content">
           <div>
             {this.bookStates.map((bookState, index) => <BookShelf 
               key={index}
               books={this.props.books.filter((book) =>(book.shelf === bookState.readingState ))}
               name={bookState.shelfName}
               onChangeShelf={ changeShelf }/>
             )}         
           </div>  
         </div> 
       </div>   
   )
	}
}

export default BookList