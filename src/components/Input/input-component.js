import React from 'react';

const Input = (props)=>{
  let val =  props.data
    return(
        <div style={props.style}>
                <label className='styleLabel' htmlFor={props.text}>{props.text}</label>
                <input className='textboxStyle'
                  type={props.type}
                  onChange={props.handleChange}
                  name= {props.text}
                /> 
                <span className='error'>{val}</span>
                
              </div>
    )
}

export default Input