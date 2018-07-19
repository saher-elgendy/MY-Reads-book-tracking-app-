import React, {Component} from 'react';
import Book from './Book';
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom';

class SearchBooks extends React.Component {
  state = {
  	query: '',
  	books: []
  }

  updateQuery = (query) => {
  	this.setState({ query: query.trim() });
  }

  render() {
  	const { query, books } = this.state;
  	const { onChangeShelf } = this.props;

    if(query) {
      BooksAPI.search(query, 20).then(books =>  this.setState({ books }))
    }

  	return(
  	  <div className="search-books">
	    <div className="search-books-bar">
	      <Link 
	        to="/"
	        className="close-search"
	        onClick={() => this.setState({ showSearchPage: false })}>Close     
	      </Link>

	      <div className="search-books-input-wrapper">
	        <input type="text"  onChange={(e) => this.updateQuery(e.target.value)} placeholder="Search by title or author"/>
	      </div>
	    </div>

	    <div className="search-books-results">
	      {(books.length && query) ? <ol className="books-grid">
            { books.map(book => ( 
              <Book
                book={ book }
                books={ books }
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