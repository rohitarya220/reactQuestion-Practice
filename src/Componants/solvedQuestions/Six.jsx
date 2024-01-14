import React, { useEffect, useState } from 'react'

const Six = () => {
  const [data, setData] = useState(null)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res)=>res.json())
    .then((item)=> setData(item))
  },[])
  return (
    <div>
      {data? (
        <div>
          <h1> {data.title}</h1>
          <h1> {data.userId}</h1>
         
        </div>
      ) 
      : 
      (
       <h1>Loading...</h1>
      )

      }
    </div>
  )
}

export default Six