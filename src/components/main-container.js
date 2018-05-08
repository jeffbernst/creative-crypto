import React from 'react'
import { Route } from 'react-router-dom'

import './main-container.css'

import { ConnectedPostFeed } from './post-feed'
import { ConnectedNewsfeed } from './newsfeed'
import { ConnectedSinglePost } from './single-post'
import { About } from './about'

export function MainContainer () {
  return (
    <main className='main-container'>
      <Route exact path="/" component={ConnectedPostFeed}/>
      <Route exact path="/:postId" component={ConnectedSinglePost}/>
      <Route exact path="/about" component={About}/>
      <ConnectedNewsfeed/>
    </main>
  )
}
