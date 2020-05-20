import React from 'react';
import TabBar from './TabBar';
import BaseNavBar from './BaseNavBar';

function Layouts(props) {
  return <div>
    <BaseNavBar />
    <div className="main">{props.children}</div>
    <TabBar />
  </div>
}

export default Layouts;