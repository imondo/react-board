import React, { useState, useEffect, useContext, useMemo, useCallback, useReducer } from "react";
import { Button  } from "antd-mobile";

const theme = {
  color: "red"
}

const UserContext = React.createContext(theme);

function getUser(user){
  console.log(`new state user: ${user}`)
}

let initCount = 0;

function reducer(state = initCount, action) {
  switch (action) {
    case "increment":
      state++
      return state
    case "decrement":
      state--
      return state      
    default:
      throw new Error();
  }
}

function User() {
  let [user, setUser] = useState(1)

  const [count, disaptch] = useReducer(reducer, initCount)

  /* 缓存计算属性 */
  const data = useMemo(() => ({
    users: (user + 1)
  }), [user]);

  /* 缓存函数getData 只执行初次 */
  const getData = useCallback(() => {
    setTimeout(() => {
      setUser(user);
      console.log('获取数据')
    }, 500);
  }, [user])

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // 监听 user 改变，执行内部代码；不 dep 则仅第一次执行

  const onChangeUser = (e) => {
    setUser(+e.target.value);
  }

  console.log(`user: ${user}`); // state 改变直接更新

  getUser(user);

  return (
    <UserContext.Provider value={theme}>
      <input value={user} onChange={onChangeUser}/>
      <div>{data.users}</div>
      <Button type="primary" onClick={e => setUser(user + 1)}>改变 State</Button>
      <Child/>

      <div>useReducer</div>
      <div>计数器{count}</div>
      <Button type="primary" onClick={e => disaptch("decrement")}>减</Button>
      <Button type="primary" onClick={e => disaptch("increment")}>加</Button>
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