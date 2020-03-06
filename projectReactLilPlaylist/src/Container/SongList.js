import React from 'react';

const SongList = props => (
    <ul>
      {props.items.map((item, index) => <li key={index} onClick={() => props.deleteItem(item.key)}>{item}</li>)}
    </ul>
  );
  
  export default SongList;