import React, { useState, useEffect } from 'react';
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
  return <div>{user}</div>
}

export default Home;