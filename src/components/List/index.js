import './style.css'
import _ from 'lodash'
import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import axios from 'axios'

export default class List extends Component {
  state = {
    column: null,
    data: {},
    direction: null,
  }

  componentWillMount() {
    this.getData()
  }

  getData = () => {
    axios.get('https://chasing-coins.com/api/v1/top-coins/20')
      .then(response => {
        this.setState({
          data: response.data
        })
      })
  }

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      })

      return
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

  render() {
    const { column, data, direction } = this.state

    return (
      <Table sortable celled fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === 'symbol' ? direction : null}
              onClick={this.handleSort('symbol')}
            >
              Name
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'cap' ? direction : null}
              onClick={this.handleSort('cap')}
            >
              Market Cap
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'price' ? direction : null}
              onClick={this.handleSort('price')}
            >
              Price
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'coinheat' ? direction : null}
              onClick={this.handleSort('coinheat')}
            >
              Coin Heat
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'day_volume' ? direction : null}
              onClick={this.handleSort('day_volume')}
            >
              24h
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'hour_volume' ? direction : null}
              onClick={this.handleSort('hour_volume')}
            >
              1h
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(data, ({ symbol, cap, price, coinheat, change }) => (
            <Table.Row key={symbol}>
              <Table.Cell>{symbol}</Table.Cell>
              <Table.Cell>{cap}</Table.Cell>
              <Table.Cell>{price}</Table.Cell>
              <Table.Cell>{coinheat}</Table.Cell>
              <Table.Cell>{change.day}</Table.Cell>
              <Table.Cell>{change.hour}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    )
  }
}

