import React from 'react'
import { TabBar, BaseNavBar } from "./components/Layouts"
import { renderRoutes } from 'react-router-config'
import routes from './routes'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from "react-redux"
import store from "./store"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <BaseNavBar />
        <div className="main">
          {renderRoutes(routes)}
        </div>
        <TabBar />
      </Router>
    </Provider>
  )
}

export default App;