"use client"
import React, { useState } from 'react'
import "./langSwitch.css"
const LangSwitch = () => {
 const [Lang,UseSetLang] = useState(true)

 const changeLang = () =>{
  UseSetLang(!Lang)
 }
  return (
<label className="switch">
  <input checked={Lang} type="checkbox" onClick={changeLang} className="toggle" />
  <span className="slider"></span>
  <span className="card-side"></span>
</label>
  )
}

export default LangSwitch



