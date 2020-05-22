import React from 'react'
import { Button } from "antd-mobile"

import { withRouter } from 'react-router-dom'


const GoBack = props => {
  console.log(props)
  const goBack = () => {
    props.history.go(-1)
  }
  return <Button type="primary" onClick={goBack}>返回</Button>
}

export default withRouter(GoBack)