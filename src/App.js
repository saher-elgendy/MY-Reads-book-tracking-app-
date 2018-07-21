import React from 'react';
import BookList from './BookList';
import SearchBooks from './SearchBooks';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state= {
  	books: [],
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    BooksAPI.getAll().then(books => this.setState({ books }))
  }

  updateBooks = (book, shelf) => {
  	BooksAPI.update(book, shelf).then(() => this.getBooks())
  }

  render() {
  	const { books } = this.state;

    return(
      <div className="app">
        <Route exact path="/" render={() => 
	      <BookList
            books={ books }
            onChangeShelf={this.updateBooks} 
          />    
	    }/>
        <Route path="/search" render={() => 
	      <SearchBooks 
            books={ books }
            onChangeShelf={ this.updateBooks }
	      />
	    }/>
	    <div className="open-search">
          <Link to="/search">Search</Link>
        </div>
     </div>
    )
  }
}
export default BooksApp
