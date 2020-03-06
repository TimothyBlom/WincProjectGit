import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Home from './Container/Home';
import AboutMe from './Container/AboutMe'
import Navigation from './Container/Navigation'

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Route exact path='/' component={Home}/>
        <Route exact path='/AboutMe' component={AboutMe}/>
      </BrowserRouter>
    );
  }
}

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       Song: '',
//       Artist: '',
//       Genre: '',
//       Rating: '',
//       items: []
//     };
//   }

//   handleChange = (event) => {
//     this.setState ({ 
//       [event.target.name]: event.target.value 
//     });                         
//   }

// handleSubmit = (event) => {
//     event.preventDefault();
//     this.setState({
//       Song: '',
//       Artist: '',
//       Genre: '',
//       Rating: '',
//       items: [...this.state.items, ' Song name: ' + this.state.Song + ' Artist: ' + this.state.Artist + ' Genre: ' +  this.state.Genre + ' Rating: ' +  this.state.Rating] //dit werkt, maar volgens mij is het zo helemaal niet de bedoeling...                      //dit pakt de waarde van de state
//     })
//   }

//   deleteItem = key => {
//     const filteredItems = this.state.items.filter(item => {
//       return item.key !== key
//     })
//     this.setState({
//       items: filteredItems,
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>Winc Lil' Liedjeslijst</h1>
//         <BrowserRouter>
//           <Route path='/' component={AboutMe} />
//           <Route path='/AboutMe' component={AboutMe} />
//         </BrowserRouter>
//         <form onSubmit={this.handleSubmit}>                   
//           <input value={this.state.Song} onChange={this.handleChange} name='Song' placeholder='Song' />
//           <input value={this.state.Artist} onChange={this.handleChange} name='Artist' placeholder='Artist' />
//           <select value={this.state.Genre} onChange={this.handleChange} name="Genre">
//             <option value=''>-Genre-</option>
//             <option value="Rock">Rock</option>
//             <option value="Pop">Pop</option>
//             <option value="Jazz">Jazz</option>
//             <option value="Classical">Classical</option>
//           </select>
//           <select value={this.state.Rating} onChange={this.handleChange} name="Rating">
//             <option value=''>-Rating-</option>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             <option value="4">4</option>
//             <option value="5">5</option>
//           </select>
//           <button>Submit</button>
//         </form>
//         <h5>(Click on the song you just saved to delete all saved songs)</h5>
//         <br />
//         <SongList items={this.state.items} deleteItem={this.deleteItem} />
//       </div>
//     );
//   }
// }