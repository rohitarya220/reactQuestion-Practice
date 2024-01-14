import React, { useState } from 'react'

const Fifteen = ({items}) => {
  const [searchInput, setSearchInput] = useState('')

  const filteredItem = items.filter((item)=>
    item.toLowerCase().includes(searchInput.toLowerCase())
  )


  return (
    <div>
      <input type='text' placeholder='search...' onChange={(data)=>setSearchInput(data.target.value)} />

      <ul>
        {filteredItem.map((item,index)=>(
          <li key={index}>{item} </li>
        ))
        
        }
      </ul>

    </div>
  )
}

export default Fifteen