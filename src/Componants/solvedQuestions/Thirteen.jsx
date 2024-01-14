import React, { useState } from 'react'

export const Thirteen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRegistered, setIsRegistered] = useState(false)
  const [isLoggedin, setIsLoggedin] = useState(false)
  const [user, setUser] = useState([])

  const handleLogin =()=>{
    if(isRegistered){
      if(isRegistered){
        const allUser = user.find((data)=> data.email === email && data.password === password)
        if(allUser){
          isLoggedin(true)
        }else{
          alert('plese enter valid details')
        }
      }
    }else{
      const newUsers = {email, password}
      setUser([...user, newUsers])
      localStorage.setItem('users', JSON.stringify([...user, newUsers]))
      setIsLoggedin(true)
    }
  }

  const handleLogout=() =>{
    setIsLoggedin(false)
    setEmail('')
    setPassword('')
  }


  return (
    <div>
        <div>
          {isLoggedin? 
            ( 
              <div>
               <h1> welcome {email} !</h1>
               <button onClick={handleLogout}>Log Out</button>
              </div>
            ) : (
              <div>
               <h2> {isRegistered? 'logIn': 'Register'}</h2>
                 <form>
                   <input type='email' placeholder='email' onChange={(e)=> setEmail(e.target.value)}  />
                   <input type='password' placeholder='Password' onChange={(e)=> setPassword(e.target.value)} />
                   <button onClick={handleLogin}>
                     {isRegistered? 'Log in': 'Register'}
                   </button>
                 </form>
   
                   <p>
                     {
                       isRegistered? 'dont have an account? register now !': 'already have an account? Log in '
                     }
                   </p>
                   <button onClick={()=> setIsRegistered(!isRegistered)}>
                     {isRegistered? 'Register': 'Log in'}
                   </button>
              </div>
            )
          }
        </div>

       
    </div>
  )
}


export default Thirteen