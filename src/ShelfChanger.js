import React, { Component } from 'react';

class ShelfChanger extends React.Component {

  render() {
  	const {book, changeShelf} = this.props;

  	return(
	  <div className="book-shelf-changer">
		<select onChange={(e) => changeShelf(book, e.target.value)} value={book.shelf}>
		  <option value="move" disabled>Move to...</option>
		  <option value="currentlyReading">Currently Reading</option>
		  <option value="wantToRead">Want to Read</option>
		  <option value="read">Read</option>
		  <option value="none">None</option>
		</select>  
      </div>	
  	)
  }
}

export default ShelfChanger;