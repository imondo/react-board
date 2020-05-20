import React from 'react';
import TabBar from './TabBar';
import NavBar from './NavBar';

function Layouts(props) {
  return <div>
    <NavBar />
    <div className="main">{props.children}</div>
    <TabBar />
  </div>
}

export default Layouts;