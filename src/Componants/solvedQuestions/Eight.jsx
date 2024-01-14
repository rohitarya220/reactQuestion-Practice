import React, { useState } from 'react'

export const Eight = () => {
  const [input, setInput] =useState('')
  const [data, setData] = useState([])

  const addTodos =()=>{
      if(input.trim() !== ''){
        setData([...data, input])        
      }
  }

  const remove = (index)=>{
      const updatedTodos = data.filter((_,i)=> i !== index)
      setData(updatedTodos)
  }

  return (
    <div>
      <input type='text' onChange={(e)=>setInput(e.target.value)  } placeholder='type your todos' />
      <button onClick={addTodos}>add</button>

      <ul>
          {data.map((item, index)=>(
            <li key={index}>
               {item} <button onClick={()=>remove(index)}> remove</button>
            
             </li> 
          ))

          }
      </ul>
    </div>
  )
}

export default Eight
