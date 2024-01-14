import React, { useState } from 'react'

export const Five = () => {
    const [checkbox, setCheckbox] = useState(false)

    const handleToggle = ()=>{
        setCheckbox(!checkbox)
    }

  return (
    <div>
        <label>
            <input type='checkbox' onChange={handleToggle} />
            <p>{ checkbox ? 'on' : 'off'}</p>
        </label>
    </div>
  )
}
