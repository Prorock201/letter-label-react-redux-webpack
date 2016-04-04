import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import LetterContainer from './containers/LetterContainer'
import LabelContainer from './containers/LabelContainer'
import './styles/app.css'
import configureStore from './store/configureStore'
require('bootstrap/dist/css/bootstrap.css')

const store = configureStore()

render(
  <Provider store={store}>
    <div className='app'>
      <LetterContainer />
      <LabelContainer />
    </div>
  </Provider>,
  document.getElementById('root')
)
