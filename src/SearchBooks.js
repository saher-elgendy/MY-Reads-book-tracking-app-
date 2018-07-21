import React, {Component} from 'react';
import Book from './Book';
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom';
import ShelfChanger from './ShelfChanger'
class SearchBooks extends React.Component {
  state = {
  	query: '',
  	searchedBooks: []
  }

  updateQuery = (query) => {
  	this.setState({ query: query.trim() });
  }

  render() {
  	const { query, searchedBooks} = this.state;
  	const { books, onChangeShelf } = this.props;

    if(query) {
      BooksAPI.search(query, 20).then(results => {
        if(results.length) {
         
          results = results.map(result => {
           result.shelf = "none";
            return result;
          })
         results.forEach(result => books.map(book =>{
           if(result.id === book.id) result.shelf = book.shelf;
         }))
        }

        this.setState({searchedBooks: results})    
      })
    }

  	return(
  	  <div className="search-books">
	    <div className="search-books-bar">
	      <Link 
	        to="/"
	        className="close-search">Close      
	      </Link>

	      <div className="search-books-input-wrapper">
	        <input type="text"  onChange={(e) => this.updateQuery(e.target.value)} placeholder="Search by title or author"/>
	      </div>
	    </div>

	    <div className="search-books-results">
	      {(searchedBooks.length && query) ? <ol className="books-grid">
            { searchedBooks.map(book => ( 
              <Book
                book={ book }
                books={ searchedBooks}
                onChangeShelf={ onChangeShelf }
              />
	        ))}
	      </ol>:`no match found`}
	    </div>
	  </div>
  	)
  }	
}

export default SearchBooks;