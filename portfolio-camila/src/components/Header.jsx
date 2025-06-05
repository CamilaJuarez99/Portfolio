import React from 'react'
import {Link } from "react-router-dom"


const Header = () => {
  return (
    <div>
      <h1 class="text-3xl font-bold underline">Camila Juarez - Fullstack Developer</h1>
      <nav>
        <Link to= "/"> Home </Link>
        <Link to="/about"> About Me </Link>
        <Link to="/contacts" > Contacts </Link>
        <Link to="/proyects" > Proyects </Link>
      </nav>
    </div>
  )
}

export default Header
