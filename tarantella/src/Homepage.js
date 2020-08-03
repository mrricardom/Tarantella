import React, { useState, useEffect } from "react"
import axios from "axios"

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
      {songTitles.map((song) => {
        return <h1>{song.fields.title}</h1>
      })}
    </>
  )
}

export default Homepage
