import React from 'react';
import { Button } from 'antd-mobile';

const goBack = (props) => {
  props.history.push({
    pathname: "/home",
    state: {
      id: 2
    },
    params: {
      user: 'Mondo'
    }
  });
}

function About(props) {
  console.log(props)
  const { match } = props;
  return (
    <div>
      { match.params.id || 'About' }
      
      <Button type="primary" onClick={e => goBack(props)}>首页</Button>

    </div>
  )
}

export default About;