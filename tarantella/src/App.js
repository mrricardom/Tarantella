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
  const [newSong, updateNewSong] = useState(0)
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
  }, [newSong])

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
    const current = songTitles.findIndex((song) => song.id === songId)
    if (current + 1 === songTitles.length) {
      updateSongId(songTitles[0].id)
      console.log(current)
    } else {
      updateSongId(songTitles[current + 1].id)
    }
    // find the index of song with id of songid in songTitles
    // if(index + 1 is = songtitlearray.length) then song id should be the id of the first song in array or song id is index+1
  }

  const back = () => {
    const current = songTitles.findIndex((song) => song.id === songId)
    if (current === -1) {
      updateSongId(songTitles[songTitles.length - 1].id)
    } else if (current === 0) {
      updateSongId(songTitles[songTitles.length - 1].id)
    } else {
      updateSongId(songTitles[current - 1].id)
    }
  }
  // find the index of song with id of songid in songTitles
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
      <div className="content-screen">
        <Link to="/new-song">Add a Song</Link>
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
            <NewSong updateNewSong={updateNewSong} newsong={newSong}></NewSong>
          </Route>
          <Route path="/songs/:id">
            <SongInfo updateSongId={updateSongId}></SongInfo>
          </Route>
        </Switch>
      </div>
      <div className="circle-menu">
        <button className="shuffle" onClick={handleClick}>
          Shuffle
        </button>
        <Link className="home" to="/" exact>
          <button>Home</button>
        </Link>

        <button className="last" onClick={back}>
          Last
        </button>
        <button className="next" onClick={next}>
          Next
        </button>
      </div>
    </>
  )
}

export default App
