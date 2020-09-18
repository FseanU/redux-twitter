import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import NewTweet from './NewTweet'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        {this.props.loading === true
          ? null
          : <NewTweet />}
      </div>
    )
  }
}

function mapStateToprops ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToprops)(App)