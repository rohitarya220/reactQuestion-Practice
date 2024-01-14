import React, { useEffect, useState } from 'react'

export const Seven = () => {
  const [time, setTime] = useState(60)

  useEffect(()=>{
     if(time>0){
      const timer = setTimeout(() => setTime(time -1 ) ,1000);
      return ()=> clearTimeout(timer)
     }
  },[time])



  return (
    <div>
      time left: {time}
    </div>
  )
}
