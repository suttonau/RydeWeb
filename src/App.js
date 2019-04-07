import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import HomeContainer from './containers/HomeContainer'
import MenuComponent from './components/MenuComponent'
import FooterComponent from './components/FooterComponent'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MenuComponent />
          <div className="content">
            <Route path="/" component={HomeContainer} />
          </div>
          <footer>
            <FooterComponent />
          </footer>
        </div>
      </Router>
    )
  }
}

export default App
