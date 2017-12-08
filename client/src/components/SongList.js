import React from 'react'
import Song from './Song';

const SongList = ({ songs, deleteSong }) => (
  <div>
    { songs.map( s => {
      return(
        <Song
          key={s.id}
          {...s}
          deleteSong={deleteSong}
        />
      )
    })}
  </div>
)

export default SongList;