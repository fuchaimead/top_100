import React from 'react';

class SongForm extends React.Component {
    state={title: '', artist: ''}

    handleChange = (e) => {
      let {name, value} = e.target
      this.setState({[name]: value})
    }

    handleSubmit = (e) => {
      e.preventDefault()
      const {title, artist} = this.state;
      const song = {title, artist}
      this.props.addSong(song);  
      this.setState({ title: '', artist: ''});
    }

    render(){
      const {title, artist} = this.state
      return(
        <div>
        <form onSubmit={this.handleSubmit}> 
          <input 
            name="title" 
            value={this.state.title} 
            onChange={this.handleChange} 
            placeholder="enter a song title" 
            required />
          <input 
            name="artist" 
            value={this.state.artist} 
            onChange={this.handleChange} 
            placeholder="add an artist"  />
          <button className="btn" type="submit"> Add Song </button> 
        </form> 
        </div> 
      )
    }
}



export default SongForm