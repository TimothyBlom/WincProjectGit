import React from 'react';
import './App.css';
import InputFields from './Container/Header.js'

// class SongOverview extends React.Component {
//     constructor() {
//       super()
//       this.state = {
//           Song: '',
//           Artist: '',
//           Genre: '',
//           Rating: '',
//       }
//       this.handleChange = this.handleChange.bind(this)
//       this.handleSubmit = this.handleSubmit.bind(this)
//     }

//     handleChange(event) {
//       this.setState ({
//         [event.target.name]: event.target.value
//       })
//     }

//     handleSubmit(event) {
//       event.preventDefault()
//       this.setState ({
//         Song: [...this.state.name, this.state.value] 
//       })
//     }
    
  
//     render() {
//       return (
//         <div>
//           <h1>Winc Lil' Liedjeslijst</h1>
//             {/* <InputFields onChange={this.handleChange}/> */}
//             <form onSubmit={this.handleSubmit}>
//               <input value={this.state.Song} onChange={this.handleChange} name='Song' placeholder='Song' />
//               <input value={this.state.Artist} onChange={this.handleChange} name='Artist' placeholder='Artist' />
//               <select value={this.state.Genre} onChange={this.handleChange} name="Genre">
//                 <option value=''>-Genre-</option>
//                 <option value="Rock">Rock</option>
//                 <option value="Pop">Pop</option>
//                 <option value="Jazz">Jazz</option>
//                 <option value="Classical">Classical</option>
//               </select>
//               <select value={this.state.Rating} onChange={this.handleChange} name="Rating">
//                 <option value=''>-Rating-</option>
//                 <option value="1">1</option>
//                 <option value="2">2</option>
//                 <option value="3">3</option>
//                 <option value="4">4</option>
//                 <option value="5">5</option>
//               </select>

//               <button type='submit' onClick={this.handleSubmit}>Submit</button>

//               <p>Song title: {this.state.Song} Artist name: {this.state.Artist} Genre: {this.state.Genre} Rating: {this.state.Rating}</p>
//             </form>
//             {/* <SongForm addSong={this.addSong}/>
//                       <table style="width:100%">
//                   <tr className="song-header">  
//                       <th className="song-row__item">Song</th>
//                       <th className="song-row__item">Artist</th>
//                       <th className="song-row__item">Genre</th>
//                       <th className="song-row__item">Rating</th>
//                     </tr>
//                   </table>
//             <SongList songs={this.state.songs}/> */}
//         </div>
//       );
//     }
//   }
  
//   export default SongOverview;







import List from './Container/Header.js';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Song: '',
      Artist: '',
      Genre: '',
      Rating: '',
      items: []
    };
  }

  handleChange = (event) => {
    this.setState ({ 
      [event.target.name]: event.target.value 
    });                         
  }

handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      Song: '',
      Artist: '',
      Genre: '',
      Rating: '',
      items: [...this.state.items, ' Song name: ' + this.state.Song + ' Artist: ' + this.state.Artist + ' Genre: ' +  this.state.Genre + ' Rating: ' +  this.state.Rating] //dit werkt, maar volgens mij is het zo helemaal niet de bedoeling...                      //dit pakt de waarde van de state
    })
  }

deleteItem = (event) => {
  this.setState({
    items: []
  })
}  

  render() {
    return (
      <div>
        <h1>Winc Lil' Liedjeslijst</h1>
        <form onSubmit={this.handleSubmit}>                   
          <input value={this.state.Song} onChange={this.handleChange} name='Song' placeholder='Song' />
          <input value={this.state.Artist} onChange={this.handleChange} name='Artist' placeholder='Artist' />
          <select value={this.state.Genre} onChange={this.handleChange} name="Genre">
            <option value=''>-Genre-</option>
            <option value="Rock">Rock</option>
            <option value="Pop">Pop</option>
            <option value="Jazz">Jazz</option>
            <option value="Classical">Classical</option>
          </select>
          <select value={this.state.Rating} onChange={this.handleChange} name="Rating">
            <option value=''>-Rating-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button>Submit</button>
        </form>
        <List items={this.state.items} onClick={this.deleteItem} />
      </div>
    );
  }
}