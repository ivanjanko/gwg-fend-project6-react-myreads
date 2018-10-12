import React, { Component } from 'react'
import BookShelf from './BookShelf';

class MainPage extends Component {

    render() {
        const state = this.props.state
        
        return (
            <div className="list-books">
            <div className="list-books-title">
            <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
            <div>
                <BookShelf
                    state={state}
                    bsSetup={{bsHeader: 'Currently Reading', apiValue: 'currentlyReading'}}
                />
                <BookShelf
                    state={state}
                    bsSetup={{bsHeader: 'Want to Read', apiValue: 'wantToRead'}}
                />
                <BookShelf
                    state={state}
                    bsSetup={{bsHeader: 'Read', apiValue: 'read'}}
                />
            </div>
            </div>
            <div className="open-search">
            <a onClick={this.props.onClick}>Add a book</a>
            </div>
        </div>
        )
    }
}

export default MainPage