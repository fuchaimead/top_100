import React, {Component} from 'react'


class Song extends Component {
  state = { editing: false, title: this.props.title, artist: this.props.artist }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({[name]: value})
  }

   handleSubmit = (e) => {
      e.preventDefault()
      const {title, artist} = this.state;
      const {id} = this.props;
      const song = {title, artist, id}
      this.updateSong(song);  
      this.editSong()
    }

  editSong = () => {
    this.setState({ editing: !this.state.editing})
  }
  updateSong = (song) => {
    this.props.updateSong(song)
  }

  deleteSong = () => {
    
      }

  render() {
    const {title, artist, id} = this.props
    let {editing} = this.state
    if (editing) {
      return(
        <form onSubmit={this.handleSubmit}>
          <input name="title" value={this.state.title} onChange={this.handleChange}/>
          <input name="artist" value={this.state.artist} onChange={this.handleChange}/>
          <button type="submit" className="btn"> Submit </button>
          <button onClick={this.editSong} className="btn"> Cancel </button>
        </form>
      )
    }
    return(
      <div>
        <ul>
        <strong> {title} by {artist} </strong>  
        <button className="waves-effect waves-teal btn-flat" 
          onClick={() => this.deleteSong(id)}>
          delete
        </button>
        <button className="waves-effect waves-teal btn-flat" 
          onClick={() => this.editSong(id)}>
          edit
        </button>
    
        </ul>
      </div>
    )
  }
}

export default Song;
