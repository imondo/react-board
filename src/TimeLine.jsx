import React from 'react';

class Index extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {
      list: []
    }
  }
  handerClick() {
    let starTime = new Date().getTime()
    this.setState({
      list: new Array(40000).fill(0)
    }, () => {
      const end = new Date().getTime()
      console.log((end - starTime) / 1000 + '秒')
    })
  }
  render() {
    const { list } = this.state
    console.log(list)
    return <div>
      <button onClick={this.handerClick.bind(this)} >点击</button>
      {
        list.map((item, index) => <li className="list" key={index} >
          {item + '' + index} Item
              </li>)
      }
    </div>
  }
}

export default Index;
