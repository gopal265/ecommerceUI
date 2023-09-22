import React, { Fragment, useState, useEffect } from 'react'
import validator from "validator"
import './Login.css'
// import { useDispatch, useSelector } from 'react-redux'
// import { registermobile, clearErrors } from '../../action/useraction'
import { useNavigate } from 'react-router-dom'
// import {useAlert} from 'react-alert'

const Login = () => {
  const img = 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/1/25/f5e9a029-33c3-4a92-811b-ef7917fe6d441674670210687-offer-banner-300-600x240-code-_-MYNTRA300.jpg'
  const [email, setEmail] = useState('')
//   const Redirect = useNavigate()
//   const dispatch = useDispatch()
//   const {loading, message, user} = useSelector(state => state.Registeruser)
//   const Alert = useAlert()
  let par = document.getElementById('error')

  const continues = () => {
    
    
    if(email.trim() === "")  par.innerHTML = "Please Entert the Email Address";
    if(!validator.isEmail(email.trim())) par.innerHTML = "Please Enter a valid Email Address";

    if(validator.isEmail(email.trim())){
      console.log(email)
    }
   

  }

//   useEffect(() => {
    
//      if (message && user) {
//     Alert.show(message)
//     Redirect('/verifying')
//   }
  
  
//   }, [Redirect, Alert, message]);

  return (

    <Fragment>
      <div className='full-width full-height center '>
        <div className=' login-wrapper' >
          <img src={img} alt="login" className='full-width' />
          <div className='p-5'>

            <h3 className='login-head'>Login <span className='small'>or</span> Singup</h3>

            <input type="email" name="email" className='login-email'
         
              onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' />
            <p id='error' className=' '></p>

            <p className='login-description'>By Continuing, I agree to the <span className='login-help'>Terms of Use</span>  & <span className='login-help'> Privacy Policy</span></p>
            <button type='submit' className='login-button'  onClick={continues}>Login </button>
            <p className='login-description'>Have trouble loggging in? <span className='login-help'>Get help</span></p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Login