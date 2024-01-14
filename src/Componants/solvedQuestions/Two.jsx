import React, { useState } from 'react'

const Two = () => {
  const [value, setValue] = useState(0);
  return (
    <div className='center'>
      <button onClick={()=> setValue( value + 1)}>+</button>
       <h1>{value} </h1>
      <button onClick={ ()=> setValue( value -1 )}>-</button>
    </div>
  )
}

export default Two