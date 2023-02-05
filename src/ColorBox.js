import React from 'react'


export function ColorBox( {color}) {
    const colorBoxStyles={
        width:"200px",
        height:"30px",
        background: color,
        marginTop:"10px"
    }
  return (
    <div style={colorBoxStyles}>
      
    </div>
  )
}
