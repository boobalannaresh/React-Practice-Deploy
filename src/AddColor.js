import React, { useState } from 'react'
import { ColorBox } from './ColorBox'


export  function AddColor() {
    const[color, setColor] = useState("orange")
    
    const colorStyles={
        backgroundColor: color
    }

    const [colorList, setColorList] = useState(["Crimsson", "Black", "Blue", "green", "brown"]);

  return (
    <div className='add-color'>
        <input style={colorStyles} type="text" placeholder="Enter a new think"  onChange={(event)=> setColor(event.target.value)} value={color}/>
                          {/* Copy Existing colorList & Add New Color to it  */}
        <button onClick={()=> setColorList([...colorList, color])}>Add-Color</button>
        {color}
           
           {
              colorList.map((clr, index)=> <ColorBox key={index} color={clr} />)
           }
        
    </div>
  )
}