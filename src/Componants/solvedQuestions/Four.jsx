import React from 'react'

export const Four = () => {
    const names = ['rohit', 'rinki', 'pinki', 'tinki','sitni']
  return (
    <div>
        <ul>
            {names.map((item, index)=> (
                <li key={index} >{item}</li>
            )
            )}
        </ul>
    </div>
  )
}
