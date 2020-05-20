import React from 'react';
import { Link } from "react-router-dom";
import "./TabBar.less";

function TabBar() {
  return (
    <div className="tabbar">
      <Link className="tabbar-item" to="/home">Home</Link>
      <Link className="tabbar-item" to="/me">Me</Link>
    </div>
  )
}

export default TabBar;