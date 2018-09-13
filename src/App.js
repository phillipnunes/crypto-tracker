import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Menu from './components/Menu'
import { Container } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
        <Container>
          <Header />
          <Menu />
          <List />
        </Container>
    );
  }
}

export default App;
