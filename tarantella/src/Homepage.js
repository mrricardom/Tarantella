import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function Homepage() {
  const [songTitles, updateSongTitles] = useState([])

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

  return (
    <>
      <h4>What's Good:</h4>
      {songTitles.map((song) => {
        return (
          <ul>
            <Link key={song.id} to={`/songs/${song.id}`}>
              {song.fields.title}
            </Link>
          </ul>
        )
      })}
    </>
  )
}

export default Homepage
