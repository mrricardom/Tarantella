import React from "react"
import "./App.css"
import { Route, Link } from "react-router-dom"
import Homepage from "./Homepage"
import Header from "./Header"
import SongInfo from "./SongInfo"

function App() {
  return (
    <>
      <Header></Header>
      <Link to="/" exact></Link>
      <Route path="/" exact>
        <Homepage></Homepage>
      </Route>
      <Route path="/new-song"></Route>
      <Route path="/songs/:id">
        <SongInfo></SongInfo>
      </Route>
      <Route></Route>
    </>
  )
}

export default App
