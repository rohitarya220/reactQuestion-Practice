import React, { useState } from 'react'

export const Nine = () => {
  const [backgroundColor,setBackgroundColor] =useState('red')

  const ColorHandler =()=>{
    const changedColor = backgroundColor == 'red'? 'green' : 'red'
    setBackgroundColor(changedColor)
  }

  return (
    <div onClick={ColorHandler} style={{
      backgroundColor,
      height:'300px',
      width:'300px',
      cursor:'pointer',
      textAlign: 'center'

    }}>
      click here and backGround color will be changed
    </div>
  )
}
