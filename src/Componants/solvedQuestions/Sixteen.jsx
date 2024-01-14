import React, { useState } from 'react'

const Sixteen = ({items, itemPerPage}) => {
  const [curentPage, setCurrentPage] = useState(1)

  const indexofLastItem = itemPerPage*curentPage;
  const indexofFirstItem = indexofLastItem-itemPerPage;
  const currentItem = items.slice(indexofFirstItem,indexofLastItem)

  const pageNumber = []

  for(let i=0; i<=Math.ceil(items.length / itemPerPage); i++){
    pageNumber.push(i)
  }

  return (
    <div>
      <ul>
        {currentItem.map((item,index)=>(<li key={index}>{item}</li>)
          
        )}
      </ul>
      {pageNumber.map((number)=>(
        <li key={number} onClick={()=>setCurrentPage(number)}>
          {number}
        </li>
      ))}
    </div>
  )
}

export default Sixteen