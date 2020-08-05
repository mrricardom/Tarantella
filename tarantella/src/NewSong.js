import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"

function NewSong() {
  const [title, updateTitle] = useState("")
  const [artist, updateArtist] = useState("")
  const [album, updateAlbum] = useState("")
  const [genre, updateGenre] = useState("")
  const [picture, updatePicture] = useState("")
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newSong = axios.post(
      "https://api.airtable.com/v0/appgWGu76q5261d23/Songs",
      {
        fields: {
          title: title,
          artist: artist,
          album: album,
          genre: genre,
          picture:
            picture === ""
              ? "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0qm3pZnMbeT-U3ccvkQBK1Ntc0cNkwG00IA&usqp=CAU"
              : picture,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    )
    updateTitle("")
    updateArtist("")
    updateAlbum("")
    updateGenre("")
    updatePicture("")
    history.push("/")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={(e) => updateTitle(e.target.value)}
        value={title}
      />
      <label htmlFor="artist">Artist</label>
      <input
        type="text"
        id="artist"
        placeholder="Artist"
        onChange={(e) => updateArtist(e.target.value)}
        value={artist}
      />
      <label htmlFor="album">Album</label>
      <input
        id="album"
        placeholder="Album"
        onChange={(e) => updateAlbum(e.target.value)}
        value={album}
      />
      <label htmlFor="genre">Genre</label>
      <input
        id="genre"
        placeholder="Genre"
        onChange={(e) => updateGenre(e.target.value)}
        value={genre}
      />
      <label htmlFor="picture">Album Image URL (Optional)</label>
      <input
        id="picture"
        placeholder="Album Image URL"
        onChange={(e) => updatePicture(e.target.value)}
        value={picture}
      />
      <input type="submit" value="Add Song" />
    </form>
  )
}

export default NewSong
