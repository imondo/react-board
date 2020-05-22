import React from 'react'
import { TabBar, BaseNavBar } from "./components/Layouts"
import { renderRoutes } from 'react-router-config'
import routes from './routes'
import { HashRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <BaseNavBar />
      <div className="main">
        {renderRoutes(routes)}
      </div>
      <TabBar />
    </Router>
  )
}

export default App;