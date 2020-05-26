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
  return (
    <div>
      <a href={`//${user}`} target="_blank">{user}</a>
      <Button>点击</Button>
      <p className="base-font">基础字体大小</p>
      <p className="base-font-vw">对比字体大小</p>
    </div>
  )
}

export default Home;