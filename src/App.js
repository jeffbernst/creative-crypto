import React, { Component } from 'react'
import './App.css'

import { NavBar } from './components/nav-bar'
import { TagList } from './components/tag-list'
import ConnectedMainContainer from './components/main-container'

export class App extends Component {
  render () {
    return (
      <div>
        <NavBar/>
        <TagList/>
        <ConnectedMainContainer/>
      </div>
    )
  };
}