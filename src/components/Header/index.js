import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import axios from 'axios'

const styles = {
  content: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '14px',
    color: '#666'
  },
  colors: {
    blueBold: {
      color: '#5d73e5',
      fontWeight: '600'
    },
    green: { color: '#3c763d' },
    red: { color:  '#a94442'}
  }
}

export default class Header extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column mobile={16} computer={4}>
          <div style={styles.content}>
            <span>Market Cap: </span>
            <span style={styles.colors.blueBold}>$239,765,933,840</span>
          </div>
        </Grid.Column>
        <Grid.Column mobile={16} computer={4}>
          <div style={styles.content} className="header__content">
            <span style={styles.colors.green}>1.74%</span>
            <span> in </span>
            <span style={styles.colors.blueBold}>24 hours</span>
          </div>
        </Grid.Column>
        <Grid.Column mobile={16} computer={4}>
          <div style={styles.content} className="header__content">
            <span style={styles.colors.red}>-1.74%</span>
            <span> in </span>
            <span style={styles.colors.blueBold}>24 hours</span>
          </div>
        </Grid.Column>
      </Grid>
    )
  }
  componentWillMount() {
    this.getData();
  }
  getData() {
    const config = {
      headers: {'Content-Type': 'application/json'}
    }
    axios.get('https://chasing-coins.com/api/v1/std/marketcap/', config)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }
}
