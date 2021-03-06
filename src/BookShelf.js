import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
    
    render() {
        const bookShelf = this.props.state.bookShelf
        const bsSetup = this.props.bsSetup

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{bsSetup.bsHeader}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {/* call the Book component */}
                    { bookShelf.map(book => book.shelf === bsSetup.apiValue ? 
                        <Book book={book} updateBook={this.props.updateBook} key={book.id} /> : null) }
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf
