import React from 'react'
import style from "./NotFound.module.css"
import logo from "../../Media/404.png"

export default function NotFound() {
  return (
    <div className={style.back}>
        <img className={style.img} src={logo} alt="404" />
    </div>
  )
}
