import React, { useState, useEffect } from "react"
import axios from "axios"

function LastSong(props) {
  const [song, updateSong] = useState({})
  // if page is home then
  //have to take current index and go back an index
  // if there is nothing to go back then go to the last song on the list
  useEffect(() => {
    // if () {
    // } else {
    // }
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

export default LastSong
