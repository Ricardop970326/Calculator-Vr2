import React from 'react'
import "../css/hero.css"


import Heropic from "../image/store.avif"

export default function Hero () {
    return (
        <>
         <div
    className="hero"
  ><img
  id="pic"
  src={Heropic}
  alt="camera"
  draggable="false"
/></div>
  </>
    );
}
   

