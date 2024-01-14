import React, { useState } from 'react'

const Twelve = () => {
  const [file, setFile] = useState(null)

  const handleFile =(e)=>{
    const uplodedFile = e.target.files[0]
    setFile(uplodedFile)
  }

  return (
    <div>
      <input type='file' accept='image/*' onChange={handleFile} />
      { file && <img style={{width:'300px', height:'400px'}} src={URL.createObjectURL(file)} alt='uploaded' /> }

    </div>
  )
}

export default Twelve