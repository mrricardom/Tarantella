import React from "react"
import "./App.css"
import { Route, Link } from "react-router-dom"
import Homepage from "./Homepage"

function App() {
  return (
    <>
      <Link to="/" exact>
        Home
      </Link>
      <Route path="/" exact>
        <Homepage></Homepage>
      </Route>
    </>
  )
}

export default App
