import React, { Component } from 'react'

const styles = {
  list: {
    listStyle: 'none',
    display: 'flex',
    paddingLeft: 0
  },
  listItem: {
    marginRight: '10px',
    cursor: 'pointer'
  }
}

export default class Menu extends Component {
  render() {
    return (
      <div>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <a href="#!">LIST</a>
          </li>
          <li style={styles.listItem}>
            <span>COINS</span>
          </li>
        </ul>
      </div>
    )
  }
}
