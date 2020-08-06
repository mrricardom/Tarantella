import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

function SongInfo(props) {
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
      props.updateSongId(params.id)
    }
    songDisplay()
  }, [params.id])

  return (
    <div className="song-info">
      <img src={song.picture} alt="album image"></img>
      <div className="song-info-text">
        <h2>Title: {song.title}</h2>
        <h3>Artist: {song.artist}</h3>
        <h3>Album: {song.album}</h3>
        <h3>Genre: {song.genre}</h3>
      </div>
    </div>
  )
}

export default SongInfo
