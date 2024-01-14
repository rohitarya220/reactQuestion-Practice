import React, { useState } from 'react'

const Seventeen = () => {
  const [selectedColor, setSelectedColor]= useState('#000000')
  return (
    <div>
      <input type='color' onChange={(e)=>setSelectedColor(e.target.value)} />
      <div style={{height:'100px', width:'100px', backgroundColor:selectedColor}}></div>
    </div>
  )
}

export default Seventeen