import React from 'react';

function InputFields() {
    return (
        <div>
            <input name='Song' placeholder='Song' id='InputSong'></input>
            <input name='Artist' placeholder='Artist' id='InputSong'></input>
            <input name='Genre' placeholder='Genre' id='InputSong'></input>
            <input name='Rating' placeholder='Rating' id='InputSong'></input>
            <button id='SubmitButton'>Submit</button>
        </div>
    )
}

export default InputFields;