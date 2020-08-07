import React, { useEffect } from "react"
import { Link } from "react-router-dom"

function Homepage(props) {
  const { songTitles, updateSongId } = props

  useEffect(() => {
    updateSongId("")
  }, [updateSongId])

  return (
    <div className="song-menu">
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
    </div>
  )
}

export default Homepage
