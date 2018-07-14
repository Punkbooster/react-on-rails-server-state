import ReactOnRails from 'react-on-rails'
import createStore from '../bundles/HelloWorld/createStore'
import App from '../bundles/HelloWorld/components/App'

ReactOnRails.registerStore({
  appStore: (initialState) => createStore(initialState)
})

ReactOnRails.register({
  App
})
