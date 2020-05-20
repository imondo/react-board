import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
// import './NavBar.less';

function BaseNavBar() {
  return (
    <NavBar
      mode="light"
      icon={<Icon type="left" />}
      onLeftClick={() => console.log('onLeftClick')}
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        <Icon key="1" type="ellipsis" />,
      ]}
    >NavBar</NavBar>
  )
}

export default BaseNavBar;