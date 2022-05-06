import React from 'react'
import "./styles.css"

const InputField:React.FC = ()=> {
  return (
    <form className='input'>
        <input type="text" placeholder='enter a task' className='input__box' ></input>
        <button className="input__submit" type='submit'>Add</button>

    </form>
  )
}

export default InputField