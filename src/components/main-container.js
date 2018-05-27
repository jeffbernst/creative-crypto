import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './main-container.css'

import { ConnectedPostFeed } from './post-feed'
import { ConnectedNewsfeed } from './newsfeed'
import { ConnectedSinglePost } from './single-post'
import { About } from './about'
import { Resources } from './resources'
import { Footer } from './footer'

class MainContainer extends React.Component {
  render () {
    return (
      <main className='main-container'>
        <div>
          <Switch>
            <Route exact path="/" component={ConnectedPostFeed}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/resources" component={Resources}/>
            <Route exact path="/:postId" component={ConnectedSinglePost}/>
          </Switch>
          {!this.props.loading && <Footer/>}
        </div>
        <ConnectedNewsfeed/>
      </main>
    )
  }
}

function mapStateToProps (state) {
  return {
    loading: state.loading,
  }
}

// needed to connect redux in this way to
// let react router function properly
export default withRouter(
  connect(mapStateToProps)(MainContainer)
)
