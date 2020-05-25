import React, { useState, useEffect, useContext } from 'react';
import { Button } from "antd-mobile";

const theme = {
  color: "red"
}

const UserContext = React.createContext(theme);

function User() {
  const [user, setUser] = useState('Mondo')

  useEffect(() => {
    setTimeout(() => {
      setUser("js.imondo.cn")
    }, 2000)
  }, [user])

  return (
    <UserContext.Provider value={theme}>
      <div>{user}</div>
      <Button type="primary" onClick={e => setUser('imondo.cn')}>改变 State</Button>
      <Child/>
    </UserContext.Provider>
  )
}

function Child() {
  const theme = useContext(UserContext);
  return (
    <div style={{color: theme.color}}>context</div>
  )
}

export default User;