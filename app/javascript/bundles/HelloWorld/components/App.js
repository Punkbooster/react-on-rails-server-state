import React from 'react'
import ReactOnRails from 'react-on-rails'
import { Provider } from 'react-redux'
import HelloWorld from './HelloWorld'

export default () => (
  <Provider store={ReactOnRails.getStore('appStore')}>
    <HelloWorld />
  </Provider>
)
