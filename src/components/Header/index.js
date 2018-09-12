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
  state = {
    market_cap: 0,
    last_day: 0,
    last_hour: 0
  }
  componentWillMount() {
    this.getData();
  }
  getData() {
    axios.get('https://chasing-coins.com/api/v1/std/marketcap/')
      .then(response => {
        let filteredValues = this.filterValues(response.data.change)

        this.setState({
          market_cap: response.data.market_cap,
          last_day: filteredValues.last_day,
          last_hour: filteredValues.last_hour
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  filterValues(values) {
    let last_day = 0
    let last_hour = 0

    Object.entries(values).forEach(([key, value]) => {
      if (key === '24h') {
        last_day = value
      }
      if (key === '1h') {
        last_hour = value
      }
    })

    return { last_day, last_hour }
  }
  render() {
    return (
      <Grid>
        <Grid.Column mobile={16} computer={4}>
          <div style={styles.content}>
            <span>Market Cap: </span>
            <span style={styles.colors.blueBold}>${this.state.market_cap}</span>
          </div>
        </Grid.Column>
        <Grid.Column mobile={16} computer={4}>
          <div style={styles.content} className="header__content">
            <span style={styles.colors.green}>{this.state.last_day}%</span>
            <span> in </span>
            <span style={styles.colors.blueBold}>24 hours</span>
          </div>
        </Grid.Column>
        <Grid.Column mobile={16} computer={4}>
          <div style={styles.content} className="header__content">
            <span style={styles.colors.red}>{this.state.last_hour}</span>
            <span> in </span>
            <span style={styles.colors.blueBold}>past hour</span>
          </div>
        </Grid.Column>
      </Grid>
    )
  }
}
