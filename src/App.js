
import './App.css';
import React, { useState } from 'react';
import {MdContentCopy} from 'react-icons/md'
import {lowerCaseLetters,upperCaseLetters,specialCharacters,numbers} from './Character'

function App() {
  const [password,setPassword] = useState("")

  const [state,setState] = useState({
    length: 8,
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbol: false
  })



  const Length = (val) =>{
    setState({ ...state,length: val})
  }


  const passGeneration = () =>{
    let str = ""
  if(state.uppercase){
    str = str + upperCaseLetters
  }
  if(state.lowercase){
    str = str + lowerCaseLetters
  }
  if(state.numbers){
    str = str + numbers
  }
  if(state.symbol){
    str = str + specialCharacters
  }
  return setPassword(createPassword(str))
  
  }

  const createPassword = (parameter) =>{
    let pass = ''
    
    for(let i = 0 ; i < state.length ; i++ ){
      let China = Math.floor(Math.random() * parameter.length)
      pass = pass + parameter.charAt(China)
    }
    return pass
  }
  
const Copy = () =>{
  navigator.clipboard.writeText(password)
}
  
 
  
  return (
    <div className='height'>
     <section id='inner'> 
     <aside className='mainInner'>
      <h3 style={{margin:'2px 0px 16px 0px',fontFamily: 'Josefin Sans, sans-serif'}} >Password Generator Project</h3>
      <div className='out'>


     <aside style={{display:'flex',width:'99%',margin:'auto'}}> <h2 className='showpass' > {password} <MdContentCopy size={30} onClick={Copy} className='copee' style={{cursor:'pointer'}} /></h2>
       </aside>




      <input type='number' onChange={(e)=>{Length(e.target.value)}} value={state.length} max={16} min={8}  style={{width:'30%',textAlign:'center',fontSize:'1.5rem',margin:'auto',height:'2rem',backgroundColor:'#1d2141',border:'2px solid white',color:'white'}} />
      <section className='settings'>
      <p style={{margin:'2px 0px 0px 0px',fontFamily: 'Josefin Sans, sans-serif'}}>Settings</p>
     <label className='level'>Include UpperCase  <input type='checkbox' checked={state.uppercase} onChange={(e)=>{setState({...state,uppercase: e.target.checked})}} /></label> 
     <label className='level'>Include LowerCase  <input type='checkbox' checked={state.lowercase} onChange={(e)=>{setState({...state,lowercase: e.target.checked})}} /></label> 
     <label className='level'>Include Numbers  <input type='checkbox' checked={state.numbers} onChange={(e)=>{setState({...state,numbers: e.target.checked})}} /></label> 
     <label className='level'>Include Symbol  <input type='checkbox' checked={state.symbol} onChange={(e)=>{setState({...state,symbol: e.target.checked})}} /></label> 
      
      </section>
      <button className='buttonp' onClick={passGeneration}>Generate Password</button>
      </div>
      </aside>
      </section>
    </div>
  )
}


   

export default App;
