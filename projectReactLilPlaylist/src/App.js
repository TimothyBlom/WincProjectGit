import React from 'react';
import './App.css';
import InputFields from './Container/Header.js'

class SongOverview extends React.Component {
    constructor() {
      super()
      this.state = {
          Song: '',
          Artist: '',
          Genre: '',
          rating: ''
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
  
    // addSong = (song) => {
    //           // doe iets om de state aan te passen
    // }

    handleChange(event) {
      this.setState ({
        [event.target.name]: event.target.value
      })
    }

    handleSubmit(event) {
      this.setState ({
        [event.target.name]: event.target.value
      })
    }
    
  
    render() {
      return (
        <div>
          <h1>Winc Lil' Liedjeslijst</h1>
            {/* <InputFields onChange={this.handleChange}/> */}
            <form onSubmit={this.handleSubmit}>
              <input onChange={this.handleChange} name='Song' placeholder='Song' />
              <input onChange={this.handleChange} name='Artist' placeholder='Artist' />
              <select onChange={this.handleChange} name="Genre">
                <option value=''>-Genre-</option>
                <option value="Rock">Rock</option>
                <option value="Pop">Pop</option>
                <option value="Jazz">Jazz</option>
                <option value="Classical">Classical</option>
              </select>
              <select onChange={this.handleChange} name="Rating">
                <option value=''>-Rating-</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="4">4</option>
              </select>

              <button type='submit' onClick={this.handleChange}>Submit</button>

              <p>Song title: {this.state.Song} Artist name: {this.state.Artist} Genre: {this.state.Genre} Rating: {this.state.Rating}</p>
            </form>
            {/* <SongForm addSong={this.addSong}/>
                      <table style="width:100%">
                  <tr className="song-header">  
                      <th className="song-row__item">Song</th>
                      <th className="song-row__item">Artist</th>
                      <th className="song-row__item">Genre</th>
                      <th className="song-row__item">Rating</th>
                    </tr>
                  </table>
            <SongList songs={this.state.songs}/> */}
        </div>
      );
    }
  }
  
  export default SongOverview;