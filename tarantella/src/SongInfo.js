import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

function SongInfo() {
  const params = useParams()
  const [song, updateSong] = useState({})

  useEffect(() => {
    const songDisplay = async () => {
      const response = await axios(
        `https://api.airtable.com/v0/appgWGu76q5261d23/Songs/${params.id}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
      )
      updateSong(response.data.fields)
    }
    songDisplay()
  }, [params.id])

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

export default SongInfo
