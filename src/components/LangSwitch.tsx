"use client"
import React, { useState } from 'react'
import "./langSwitch.css"
const LangSwitch = () => {
 const [lang,useSetLang] = useState(true)

 const changeLang = () =>{
    useSetLang(!lang)
 }
  return (
<label className="switch">
  <input checked={lang} type="checkbox" onClick={changeLang} className="toggle" />
  <span className="slider"></span>
  <span className="card-side"></span>
</label>
  )
}

export default LangSwitch



