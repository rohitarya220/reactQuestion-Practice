
import { useTheme } from './NineteenContext'

const Nineteen = () => {
  const {isToggled, toggleTheme} = useTheme()

  return (
    <div>
      <label>
        <input type='checkbox' checked={isToggled} onChange={toggleTheme}/>
        dark mode
      </label>
     
    </div>
  )
}

export default Nineteen