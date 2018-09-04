import React, { Component } from 'react'
import Header from './components/Header'
import { Container } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
        <Container>
          <Header />
        </Container>
    );
  }
}

export default App;
