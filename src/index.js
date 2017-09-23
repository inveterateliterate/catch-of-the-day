import React from 'react'
// can import all of ReactDom then call ReactDom.render(), but don't need all that here
import { render } from 'react-dom'
//  don't need a name for this, just importing the file:
import { BrowserRouter, Match, Miss } from 'react-router'

import './css/style.css' // can also import specific styles in specific component files
import App from './components/App'
import StorePicker from './components/StorePicker'
import NotFound from './components/NotFound'

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern='/' component={StorePicker} />
        <Match exactly pattern='/store/:storeId' component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main'))
