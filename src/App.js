import React from 'react'
import ReactDOM from "react-dom"
import './global.less'

class App extends React.Component {
  constructor() {
    super(...arguments)
  }
  render() {
    return (
      <div>这是个 React APP</div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))