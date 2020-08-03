import React from "react"
import "./App.css"
import { Route, Link } from "react-router-dom"

function App() {
  return (
    <>
      <h1>hi world</h1>
      <Link to="/" exact>
        Home
      </Link>
    </>
  )
}

export default App
