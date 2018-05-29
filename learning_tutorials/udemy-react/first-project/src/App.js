import React, { Component } from 'react';
import './App.css';
import ConditionalSection from './sections/conditional'
import cars from './data/cars.json'

class CarItem extends Component {
  render() {
    const { car } = this.props

    return (
      <li >
        <p><strong>Name: </strong>{car.name}</p>
        <p><strong>Name: </strong>{car.company}</p>
      </li>
    )
  }
}

class App extends Component {
  render() {

    const numbers = [1, 2, 3, 4, 5]
    return (
      <div className="App">
        <h4>working with lists</h4>
        <ul>

          {
            cars.map(car => {
              return <CarItem key={car.id} car={car} />
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
