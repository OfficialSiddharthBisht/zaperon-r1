import React,{useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'

const Greetings = () => {
  const userName = localStorage.getItem("username")
  return (
    <div id='greetings'>
     <h1>
      Hello ,welcome {userName}
     </h1>
    </div>
  )
}

export default Greetings