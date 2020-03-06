import React from 'react';

const List = props => (
    <ul>
      {
        props.items.map((item, index) => <li key={index}>{item}</li>)
        
      }
    </ul>
  );
  
  export default List;

// function InputFields() {
    
//     return (
//         <div>
//           <h1>Winc Lil' Liedjeslijst</h1>
//           <form onSubmit={this.handleSubmit}>
//             <input value={this.state.Song} onChange={this.handleChange} name='Song' placeholder='Song' />
//             <input onChange={this.handleChange} name='Artist' placeholder='Artist' />
//             <select onChange={this.handleChange} name="Genre">
//               <option value=''>-Genre-</option>
//               <option value="Rock">Rock</option>
//               <option value="Pop">Pop</option>
//               <option value="Jazz">Jazz</option>
//               <option value="Classical">Classical</option>
//             </select>
//             <select onChange={this.handleChange} name="Rating">
//               <option value=''>-Rating-</option>
//               <option value="1">1</option>
//               <option value="2">2</option>
//               <option value="3">3</option>
//               <option value="4">4</option>
//               <option value="4">4</option>
//             </select>

//             <button type='submit' onClick={this.handleChange}>Submit</button>

//             <p>Song title: {this.state.Song} Artist name: {this.state.Artist} Genre: {this.state.Genre} Rating: {this.state.Rating}</p>
//             <br />
//             <p> {this.state.Song} </p>
//           </form>
//       </div>
//     )
// }

// export default InputFields;