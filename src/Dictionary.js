import React from 'react'
import fetch from 'fetch'
export class Dictionary extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  componentDidMount () {
    return fetch('http://wikipedia.simple.net/api?keyword=犬&output=xml')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          loading: true,
          data: responseJson
        })
      })
      .catch(error => {
        console.error(error)
      })
  }

  render () {
    if (this.state.loading) {
      return (
        <div className='App-header'>
          <p>{this.state.data}</p>
        </div>
      )
    } else {
      return (
        <div className='App-header'>
          <p>Loading...</p>
        </div>
      )
    }
  }
}
