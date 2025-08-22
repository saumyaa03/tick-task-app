import React from 'react'
import '../styles/styles.css'

const InputField = () => {
  return (
    <form className='input-form'> 
      <input type='text' placeholder='Enter a task' className='input-box'/>
      <button type='submit' className='input-submit'>Go</button>
    </form>
  )
}

export default InputField
