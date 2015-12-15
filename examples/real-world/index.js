import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import store from './store/configureStore'

console.log('index: store=%o', store)

render(
  <Root store={store} />,
  document.getElementById('root')
)
