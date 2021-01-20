import React from 'react';

class Index extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {
      list: []
    }
  }
  handerClick() {
    this.sliceTime(new Array(40000).fill(0), 0)
  }
  sliceTime(list, times) {
    if (times === 400) return
    setTimeout(() => {
      const newList = list.slice(times, (times + 1) * 100) /* 每次截取 100 个 */
      this.setState({
        list: this.state.list.concat(newList)
      })
      this.sliceTime(list, times + 1)
    }, 0)
  }
  render() {
    const { list } = this.state
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