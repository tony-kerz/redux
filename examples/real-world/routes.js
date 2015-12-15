import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import UserPage from './containers/UserPage'
import RepoPage from './containers/RepoPage'
import store from './store/configureStore'

function onEnter() {
  console.log('routes: on-enter: store=%o', store)
}

export default (
  <Route path="/" component={App} onEnter={onEnter}>
    <Route path="/:login/:name"
           component={RepoPage} />
    <Route path="/:login"
           component={UserPage} />
  </Route>
)
