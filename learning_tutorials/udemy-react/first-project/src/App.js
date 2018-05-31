import React, { Component } from 'react';
import './App.css';
import ConditionalSection from './sections/conditional'
import cars from './data/cars.json'



class App extends Component {
  constructor() {
    super()
    this.state = { mouseX: 0, mouseY: 0 }
  }

  handleSubmit(e){
    e.preventDefault()
    const name = document.getElementById('name').value
    const email = document.getElementById('twitter').value
    console.log({name, email})
  }

  render() {
    return (
      <div className="App">
        <h4>Forms</h4>
        <form onSubmit={this.handleSubmit} action="">
          <p>
            <label htmlFor="">Nombre: </label>
            <input id="name" name="username" placeholder="Introduce el nombre" type="text" />
          </p>

          <p>

            <label htmlFor="">Twitter: </label>
            <input id="twitter" name="twitterAccount" placeholder="Introduce tu twitter" type="text" />

          </p>

          <button >Send</button>
        </form>
      </div>
    );
  }
}

export default App;
