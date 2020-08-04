import React, { useState, useEffect } from "react"
import { Route, Link, Switch, useHistory } from "react-router-dom"
import axios from "axios"
import Homepage from "./Homepage"
import Header from "./Header"
import SongInfo from "./SongInfo"
import NextSong from "./NextSong"
import LastSong from "./LastSong"
import "./App.css"

function App() {
  const [songTitles, updateSongTitles] = useState([])
  const history = useHistory()

  useEffect(() => {
    const apiCall = async () => {
      const response = await axios(
        "https://api.airtable.com/v0/appgWGu76q5261d23/Songs?&view=Grid%20view",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
      )
      updateSongTitles(response.data.records)
      console.log(response.data.records)
    }
    apiCall()
  }, [])

  const [songId, updateSong] = useState("")

  const handleClick = () => {
    const size = songTitles.length
    if (!size) {
      updateSong({})
    } else {
      const randomIndex = Math.floor(Math.random() * size)
      updateSong(songTitles[randomIndex].id)
    }
  }
  useEffect(() => {
    if (songId === "") {
      history.push("/")
    } else {
      history.push(`/songs/${songId}`)
    }
  }, [songId])

  return (
    <>
      <Header></Header>
      <Link to="/" exact></Link>
      <Switch>
        <Route path="/" exact>
          <Homepage songTitles={songTitles}></Homepage>
        </Route>
        <Route path="/new-song"></Route>
        <Route path="/songs/:id">
          <SongInfo></SongInfo>
        </Route>
      </Switch>
      <button onClick={handleClick}>Shuffle</button>
      <button>Next</button>
      <button>Last</button>
    </>
  )
}

export default App
