import React from 'react';
import { withRouter } from 'react-router-dom'
import { NavBar, Icon } from 'antd-mobile';

const goBack = (props) => {
  props.history.go(-1);
}

function BaseNavBar(props) {
  console.log(props)
  return (
    <NavBar
      mode="light"
      icon={<Icon type="left" />}
      onLeftClick={() => goBack(props)}
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        <Icon key="1" type="ellipsis" />,
      ]}
    >NavBar</NavBar>
  )
}

export default withRouter(BaseNavBar);