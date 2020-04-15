import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component'

class App extends Component{
  constructor(){
    super();

    this.state = {
      books : [
      ]
    };
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(books => this.setState({books:books}))

  }
  render(){
    return(
      <div className="App">
        <CardList>
          {this.state.books.map(book => (
          <h1 key={book.id}> {book.name} </h1>)) }
        </CardList>
       
    </div>
    );
  }
}

export default App;
