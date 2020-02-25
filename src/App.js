import React from 'react'
import './App.css'
import fetch from 'node-fetch'
import Button from '@material-ui/core/Button'

const today = new Date()
var ye = today.getFullYear()
var mo = ('0' + (today.getMonth() + 1)).slice(-2)
var da = ('0' + today.getDate()).slice(-2)
var day = ye + '/' + mo + '/' + da

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      json: []
    }
  }

  onClick = () => {
    fetch('http://api.jugemkey.jp/api/horoscope/free/' + day)
      .then(response => {
        return response.json()
      })
      .then(json => {
        this.setState({
          json: json['horoscope'][day][0]
        })
      })
  }

  render () {
    return (
      <div className='app'>
        <h1>{day + 'の運勢'}</h1>
        <div className='btn'>
          <Button
            variant='contained'
            color='secondary'
            onClick={this.onClick}
            style={{ fontSize: '23px' }}
          >
            占う！
          </Button>
        </div>
        <div>
          <ul className='luck'>
            <li>
              <span className='under'>金運</span>(5段階評価):{'  '}
              {JSON.stringify(this.state.json['money'])}
            </li>
            <li>
              <span className='under'>仕事運</span>(5段階評価):{'  '}
              {JSON.stringify(this.state.json['job'])}
            </li>
            <li>
              <span className='under'>恋愛運</span>(5段階評価):{'  '}
              {JSON.stringify(this.state.json['love'])}
            </li>
          </ul>
          <ul className='up'>
            <li>
              <span className='under2'>ラッキーアイテム</span>:{'  '}
              {JSON.stringify(this.state.json['item'])}
            </li>
            <li>
              <span className='under2'>ラッキーカラー</span>:{'  '}
              {JSON.stringify(this.state.json['color'])}
            </li>
          </ul>
          <p>{JSON.stringify(this.state.json['content'])}</p>
        </div>
      </div>
    )
  }
}

// <p>{JSON.stringify(this.state.json['content'])}</p>
