import React from 'react';
import { Link } from "react-router-dom";

const style = {
  test: {
    width: 30,
    height: 30,
    marginLeft: 30
  },
  border: {
    marginTop: 30,
    border: `1px solid #ccc`
  }
}

function Me() {
  return (<div>Me
    <div className="hairline-top" style={{...style.test}}></div>
    <div style={{...style.test, ...style.border}}></div>
    <Link to="/about">关于我</Link>
    <Link to="/me/1">详情</Link>
  </div>)
}

export default Me;