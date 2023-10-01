import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const GenderFilter = ({location}) => {
    const [selectGender,setSelectGender] = useState('')
    let gender = ["men","women",'boys','girls']
    const navigate = useNavigate()
    const changeGender = (e) =>{
        setSelectGender(e.target.value)
        console.log(selectGender)
        genderfun(e.target.value)
      }
    
      const  genderfun = (e) =>{

 
        let url = location.search
        if (url.includes('?')) {
          let newtext = e.replace(' ', '%20')
            if (url.includes(`${newtext}`)) {
             let newurl = url.includes(`&gender=${newtext}`) ? url.replace(`&gender=${newtext}`,'') : null
             let newurl2 = url.replace(`?gender=${newtext}`,'')
             let newurlsuccess =  (newurl === null ? newurl2 : newurl)
         
            //  window.location = newurlsuccess 
            navigate(newurlsuccess)
     
            }else{
           
              url += `&gender=${e}`
              navigate(url)
          
              // window.location = url
            }
      
          
        
        }else{
          url += `?gender=${e}`
          navigate(url)
      
          // window.location = url
      
        }
      }
  return (
    <>
     <ul className=''>
            {
              gender.map((e)=>
              <li className=''>
              <input type="radio" name="gender" value={e} className='' id={`gender-${e}`} checked={selectGender === e}  onChange={changeGender} />
              <label className=''>{e}</label>
              </li>
              )
            }
           
          </ul> 
    </>
  )
}

export default GenderFilter
