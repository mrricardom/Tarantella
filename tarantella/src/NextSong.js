import React, { useState, useEffect } from "react"
import axios from "axios"

function NextSong(props) {
  const [song, updateSong] = useState({})

  useEffect(() => {
    // if at home, start off with song 1
    // Take the current index, and go to the next link
    // if nothing else to loop through, go back to index 0
    // when you get random index, store it to state in app randomn index plus pone, find item in array, find its id, and then redirect to that page
  }, [props.songTitles])

  return (
    <>
      <img src={song.picture}></img>
      <h2>Title: {song.title}</h2>
      <h3>Artist: {song.artist}</h3>
      <h3>Album: {song.album}</h3>
      <h3>Genre: {song.genre}</h3>
    </>
  )
}

export default NextSong
