import React, { useState } from 'react'

export const Three = () => {
    const [input, setInput] = useState('')
  return (
    <div>
        <input value={input} onChange={(e)=> setInput(e.target.value)} type='text' placeholder='write and see...'/>

        <h1> User input: {input}</h1>

    </div>
  )
}
