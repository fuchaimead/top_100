import React from 'react'
import Song from './Song';

const SongList = ({ songs, deleteSong, updateSong }) => (
  <div>
    { songs.map( s => {
      return(
        <Song
          key={s.id}
          {...s}
          deleteSong={deleteSong}
          updateSong={updateSong}
        />
      )
    })}
  </div>
)

export default SongList;