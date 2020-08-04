import React, { useState, useEffect } from "react"
import { Route, Link, Switch, useHistory } from "react-router-dom"
import axios from "axios"
import Homepage from "./Homepage"
import Header from "./Header"
import SongInfo from "./SongInfo"
import HowTo from "./HowTo"
import LastSong from "./LastSong"
import "./App.css"
import NewSong from "./NewSong"

function App() {
  const [songTitles, updateSongTitles] = useState([])
  const [songId, updateSong] = useState("")
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
      <Switch>
        <Route path="/" exact>
          <Homepage songTitles={songTitles}></Homepage>
        </Route>
        <Route path="/how-to">
          <HowTo></HowTo>
        </Route>
        <Route path="/new-song">
          <NewSong></NewSong>
        </Route>
        <Route path="/songs/:id">
          <SongInfo></SongInfo>
        </Route>
      </Switch>
      <button onClick={handleClick}>Shuffle</button>
      <button>Next</button>
      <button>Last</button>
      <Link to="/" exact>
        <button>Home</button>
      </Link>
      <Link to="/new-song">Add a Song</Link>
    </>
  )
}

export default App
