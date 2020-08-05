import React, { useState, useEffect } from "react"
import { Route, Link, Switch, useHistory } from "react-router-dom"
import axios from "axios"
import Homepage from "./Homepage"
import Header from "./Header"
import SongInfo from "./SongInfo"
import HowTo from "./HowTo"
import NewSong from "./NewSong"
import "./App.css"

function App() {
  const [songTitles, updateSongTitles] = useState([])
  const [songId, updateSongId] = useState("")
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
      updateSongId({})
    } else {
      const randomIndex = Math.floor(Math.random() * size)
      updateSongId(songTitles[randomIndex].id)
    }
  }

  const next = () => {
    // find the index of song with id of songid in songTitles
    const current = songTitles.findIndex((song) => song.id === songId)
    if (current + 1 === songTitles.length) {
      updateSongId(songTitles[0].id)
    } else {
      updateSongId(songTitles[current + 1].id)
    }
    // if(index + 1 is = songtitlearray.length) then song id should be the id of the first song in array or song id is index+1
  }

  const back = () => {
    // find the index of song with id of songid in songTitles
    const current = songTitles.findIndex((song) => song.id === songId)
    if (current === -1) {
      updateSongId(songTitles[songTitles.length - 1].id)
    } else {
      updateSongId(songTitles[current - 1].id)
    }
    console.log(current)
  }
  // if(index is -1, then take the last song. if not then the id is index - 1

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
          <Homepage
            updateSongId={updateSongId}
            songTitles={songTitles}
          ></Homepage>
        </Route>
        <Route path="/how-to">
          <HowTo></HowTo>
        </Route>
        <Route path="/new-song">
          <NewSong> </NewSong>
        </Route>
        <Route path="/songs/:id">
          <SongInfo></SongInfo>
        </Route>
      </Switch>
      <button onClick={handleClick}>Shuffle</button>
      <button onClick={next}>Next</button>
      <button onClick={back}>Last</button>

      <Link to="/" exact>
        <button>Home</button>
      </Link>

      <Link to="/new-song">Add a Song</Link>
    </>
  )
}

export default App
