import React from "react"
import { Link } from "react-router-dom"
function Header() {
  return (
    <div>
      <Link to="/" exact>
        <h1>Tarantella</h1>
      </Link>
      <h3>How to use this app</h3>
    </div>
  )
}

export default Header
