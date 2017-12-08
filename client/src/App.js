import React, { Component } from 'react';
import SongForm from './components/SongForm';
import SongList from './components/SongList';
import './App.css'
import axios from 'axios'
import background from './images/background.jpg'

class App extends Component {
  state = {songs:[]}

  componentDidMount() {
    fetch('/api/songs')
      .then( res => res.json() )
      .then( songs => this.setState({ songs }) )
  }

  addSong = (newSong) => {
    axios.post('/api/songs', newSong)
      .then(res => {
        const { songs } = this.state;
        this.setState({ songs: [res.data, ...songs] })
      })
  }

  deleteSong = (id) => {
    alert("Delete Song?")
    axios.delete(`/api/songs/${id}`)
    .then( () => {
      const { songs } = this.state;
      this.setState({ songs: songs.filter( s => s.id !== id ) })
    })
  }

  render() {
    return (
      <div> 
        <section style={ sectionStyle }> 
        <header className="blue lighten-1">
        <nav className="blue lighten-1">
            <a href="home" className="brand-logo center">React Rails - Billboard Top 100</a>
          </nav>
        </header> 
      <main className="container center" >
        <SongForm addSong={this.addSong}/> 
        <SongList className="col s12" 
              songs={this.state.songs}
              deleteSong={this.deleteSong}/>
        </main>
        </section> 
       </div> 
    );
  }
}

export default App;

const sectionStyle = {
  width: "100%",
  backgroundImage: `url(${background})`,
  color: 'white',
}
