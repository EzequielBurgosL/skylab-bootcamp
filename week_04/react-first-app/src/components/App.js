import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Title from './Title'
import SearchFrom from './SearchFrom'
import MainContent from './MainContent';
import MainContentError from './mainContentError'


class App extends Component {

  // constructor() {
  //   super()

  state = {
    userName: '',
    userInformation: {},
    onError: false
    //   }
  }

  _handlerSearchUser = (e) => {
    e.preventDefault()
    // console.log(this.state.userName)

    const headers = {
      headers: {
        Authorization: 'Bearer a2824349577e5e663a7506b1ae7b4dc6b5fa9332'
      }
    };

    fetch('https://api.github.com/users/' + this.state.userName, headers)
      .then(res => res.json())
      .then(userInformation => {
        console.log(userInformation)
        userInformation.message ? this.setState({onError: true }) : this.setState({ onError: false})
        this.setState({ userInformation })
      })

  }


  _handlerWriteName = (e) => {
    e.preventDefault()

    this.setState({
      userName: e.target.value
    })

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title text="My React App" />
        </header>

        <main className="mainSection">

        <SearchFrom _handlerSearchUser={this._handlerSearchUser} _handlerWriteName={this._handlerWriteName}/>
        {this.state.onError ? <MainContentError userInformation={this.state.userInformation}/> : <MainContent userInformation={this.state.userInformation}/>}        
        </main>

        <footer>
                <div className="footer"><footer><div className="grid-item footer"><section className="footer-box"><div className="footer-images footer-first"><h4>About Us</h4><p><a href="http://www.google.es" target="_blank">About MailChimp</a></p><p><a href="http://www.google.es" target="_blank">Jobs</a></p><p><a href="http://www.google.es" target="_blank">Customer Stories</a></p><p><a href="http://www.google.es" target="_blank">Press Resources</a></p><p><a href="http://www.google.es" target="_blank">Press Release</a></p><p><a href="http://www.google.es" target="_blank">Integration Fund</a></p><p><a href="http://www.google.es" target="_blank">Brand Assets</a></p></div><div className="footer-images footer-second"><h4>Connect With Us</h4><p><a href="http://www.google.es" target="_blank">Integrations &amp; Plugins</a></p><p><a href="http://www.google.es" target="_blank">MailChimp API</a></p><p><a href="http://www.google.es" target="_blank">MailChimp Labs</a></p></div><div className="footer-images footer-third"><h4>Contact Us</h4><p><a href="http://www.google.es" target="_blank">Contact MailChimp</a></p><p><a href="http://www.google.es" target="_blank">Partner With Us</a></p><p><a href="http://www.google.es" target="_blank">Abuse Desk</a></p><p><a href="http://www.google.es" target="_blank">MailChimp Status</a></p></div><div className="footer-images footer-forth"><h4>Legal Info</h4><p><a href="http://www.google.es" target="_blank">Terms of Use</a></p><p><a href="http://www.google.es" target="_blank">Privacy Policy</a></p><p><a href="http://www.google.es" target="_blank">Copyright Policy</a></p></div></section></div><p>© 2001-2011 All Rigths Reserved. MailChimp® is a registered trademark of The Rocket Science Group</p></footer></div>
        </footer>

      </div>
    );
  }
}

export default App;
