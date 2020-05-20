import React from 'react'
import ReactDOM from "react-dom"
import { renderRoutes } from 'react-router-config'
import routes from './routes'
import { HashRouter as Router } from 'react-router-dom'
import './global.less'

import './utils/rem';

import Layouts from "./components/Layouts";

function App() {
  return (
    <Router>
      <Layouts>
        {renderRoutes(routes)}
      </Layouts>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))