import React, { useState, useMemo, useRef } from 'react';

function Parent() {
  let [count, setCount] = useState(0)
  const childRef = useRef(null)

  const childClick = (val) => {
    console.log(val, childRef);
    childRef.current.setState({
      num: 2
    });
  }

  return (
    <div>
      <h4>组件传值</h4>
      <button onClick={e => setCount(count + 1)}>向子组件传值</button>
      <Child value={count} childClick={childClick} />
      <Child1 ref={childRef} />
    </div>
  );
}

class Child1 extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      num: 1
    }
  }
  render() {
    const { num } = this.state;
    return (
      <div>
        <div>ref 组件</div>
        <div>{num}</div>
      </div>
    )
  }
}

function Child(props) {
  const memoState = useMemo(() => ({
    myCount: props.value + 1
  }), [props.value])

  const onClickBtn = () => {
    props.childClick(memoState);
  }

  return (
    <div>
      <h4>子组件</h4>
      <div>父组件的数据：{props.value}</div>
      <div>子组件的数据：{memoState.myCount}</div>
      <button onClick={onClickBtn}>子组件点击</button>
    </div>
  )
}

export default Parent;