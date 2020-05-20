import React from 'react'
import ReactDOM from "react-dom"
import { renderRoutes } from 'react-router-config'
import routes from './routes'
import { HashRouter as Router, Link } from 'react-router-dom'
import './global.less'

import TabBar from "./components/Layouts/TabBar";

function App() {
  return (
    <Router>
      <div>这是个 React APP</div>
      <TabBar/>
      {renderRoutes(routes)}
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))