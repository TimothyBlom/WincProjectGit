import React from 'react';

const Header = props => (
    <ul>
      {props.items.map((item, index) => <li key={index} onClick={() => props.deleteItem(item.key)}>{item}</li>)}
    </ul>
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
  );
  
  export default Header;