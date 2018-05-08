import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './main-container.css'

import { ConnectedPostFeed } from './post-feed'
import { ConnectedNewsfeed } from './newsfeed'
import { ConnectedSinglePost } from './single-post'
import { About } from './about'
import { Resources } from './resources'

export function MainContainer () {
  return (
    <main className='main-container'>
      <Switch>
        <Route exact path="/" component={ConnectedPostFeed}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/resources" component={Resources}/>
        <Route exact path="/:postId" component={ConnectedSinglePost}/>
      </Switch>
      <ConnectedNewsfeed/>
    </main>
  )
}
