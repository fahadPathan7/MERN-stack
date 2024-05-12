import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// redux
import { Provider } from 'react-redux'

// store
import store from './components/ReduxToolkit/app/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
