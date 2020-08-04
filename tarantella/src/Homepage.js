import React from "react"

import { Link } from "react-router-dom"

function Homepage(props) {
  const { songTitles } = props

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
