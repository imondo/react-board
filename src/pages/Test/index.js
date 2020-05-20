import React, { useState, useEffect } from 'react';
import Swiper from 'swiper';

const style = {
  img: {
    width: '100%',
    height: '100%'
  }
}

import { getImages } from "@/api";

function Test() {

  const [list, setList] = useState([]);

  useEffect(() => {

    getImages().then(res => {
      setList(res);

      new Swiper('.swiper-container')
    })

  }, []);

  return <div className="swiper-container">
    <div className="swiper-wrapper">
      {
        list.map(item => {
          return (
            <div className="swiper-slide" key={item.imdbID}>
              <img src={item.Poster} style={style.img}></img>
            </div>
          )
        })
      }
    </div>
  </div>
}

export default Test;