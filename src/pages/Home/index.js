import React, { useState, useEffect } from 'react';
import { Button } from 'antd-mobile';
import { getUser } from "@/api";

getUser().then(res => {
  console.log(res)
})

function Home() {

  const [user, setUser] = useState('');
  useEffect(() => {
    getUser().then(user => {
      setUser(user.name);
    })
  }, [user]);
  return <div>{user}
    <Button>点击</Button>
  </div>
}

export default Home;