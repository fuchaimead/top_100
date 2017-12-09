import React, { Component } from 'react';
import SongForm from './components/SongForm';
import SongList from './components/SongList';
import './App.css'
import axios from 'axios'
import background from './images/background.jpg'

class App extends Component {
  state = {songs:[]}

  componentDidMount() {
    axios.get('/api/songs')
      .then( res => this.setState({ songs: res.data }) )
  }

  addSong = (newSong) => {
    axios.post('/api/songs', newSong)
      .then(res => {
        const { songs } = this.state;
        this.setState({ songs: [res.data, ...songs] })
      })
  }

  deleteSong = (id) => {
    window.confirm("Delete Song?")
    axios.delete(`/api/songs/${id}`)
    .then( () => {
      const { songs } = this.state;
      this.setState({ songs: songs.filter( s => s.id !== id ) })
    })
  }

  updateSong = (song) => {
    axios.put(`/api/songs/${song.id}`, song)
    .then( res => {
      let songs = this.state.songs.map( s => {
        if (s.id === song.id)
          return res.data;
        return s;
      })
      this.setState({ songs })
      //this.setState({ songs: [res.data, ...songs]})
    })
    .catch(err => {
      console.log(err)
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
      <main className="container" >
        <SongForm addSong={this.addSong}/> 
        <SongList className="col s12" 
              songs={this.state.songs}
              deleteSong={this.deleteSong}
              updateSong={this.updateSong}/>
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
