import './App.css'
import { useState ,useCallback , useEffect } from 'react'

function App() {
  const [charLength , setCharLength] = useState(5)
  const [number , setNumber] = useState(false)
  const [specialChar , setSpecialChar] =useState(false)
  const [password , setPassword] = useState("")

 const passgenerator =  useCallback( ()=> {
    let pass = ""
    let string= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (number) string += "1234567890"
    if (specialChar) string += "!@#$%^&*()_+=<>?/|"

    for(let i=1; i<=charLength ; i++ ){
      let genPass = Math.floor(Math.random()*string.length+1)
      pass +=string.charAt(genPass)
    }
    setPassword(pass)
  } , [charLength , number , specialChar , setPassword])

useEffect(()=> {
  passgenerator()
} ,[charLength , number , specialChar])

  return (
    <>
   <div className="main">
    <div className="pass-generator-area">
      <input className='pass-form' type='text' value={password} readOnly/>
      <button className='btn'>copy</button>
    </div>
    <div className="apply-features">
      <input className='charlength' type='range' max={15} min={5} value={charLength} onChange={(e)=> {setCharLength(e.target.value)}}/>length &nbsp;
      <input className='numbers' type='checkbox' defaultChecked={number} onChange={()=> {setNumber((prev)=>!prev)}}/>numbers
      <input className='character' type='checkbox' defaultChecked={specialChar} onChange={()=> {setSpecialChar((prev) => !prev)}}/>special-char
    </div>

   </div>
    </>
  )
}

export default App
