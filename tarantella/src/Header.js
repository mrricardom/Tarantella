import React from "react"
import { Link } from "react-router-dom"
function Header() {
  return (
    <div>
      <Link to="/" exact>
        <h1>Tarantella</h1>
      </Link>
      <Link to="/how-to">
        <h3>How to use this app</h3>
      </Link>
    </div>
  )
}

export default Header
