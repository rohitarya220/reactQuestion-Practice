import React from 'react'
import { useTheme } from './NineteenContext'


export const NineTeenCom = () => {
    const {isToggled} = useTheme()
    const darkTheme = isToggled ? 'darkTheme' : 'lightTheme'
  return (
    <div className={`container ${darkTheme}`}>
     <h1>now the functio will work fine </h1>

    </div>
  )
}
