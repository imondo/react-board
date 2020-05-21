import React from 'react';

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
    <div style={Object.assign(style.test, style.border)}></div>
  </div>)
}

export default Me;