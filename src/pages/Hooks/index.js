import React, { useState, useEffect } from 'react';
import { Button } from "antd-mobile";

function User() {
  const [user, setUser] = useState('Mondo')

  useEffect(() => {
    setTimeout(() => {
      setUser("js.imondo.cn")
    }, 2000)
  }, [user])

  return (
    <div>
      <div>{user}</div>
      <Button type="primary" onClick={e => setUser('imondo.cn')}>改变 State</Button>
    </div>
  )
}

export default User;