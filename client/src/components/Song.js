import React from 'react'

const Song = ({ id, title, artist, deleteSong }) => (
    <div>
    <div>
      <strong> {title} by {artist} </strong> 
    </div>  
    <div> 
    <button className="waves-effect waves-teal btn-flat" 
      onClick={() => deleteSong(id)}>
      delete
    </button>
    </div>
    </div>
)

export default Song;

