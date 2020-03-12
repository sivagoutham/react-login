import React from 'react';

const Input = (props)=>{
    return(
        <div style={props.style}>
                <label className='styleLabel' htmlFor="name">{props.text}</label>
                <input className='textboxStyle'
                  id="name"
                  type="text"
                  value={props.value}
                  onChange={props.handleChange}
                  name="name"
                />
              </div>
    )
}

export default Input