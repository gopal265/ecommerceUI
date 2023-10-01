import React from 'react'

const ColorFilter = ({product}) => {
   
    let colors = [];
  
    const getColors =() =>{
        for(let i = 0 ; i < product.length;i++){
          colors.push(product[i].colors)
        }
      }
      getColors()

    function colorfun(e){
        let url = document.URL
      
        if (url.includes('?')) {
          let newtext = e.replace(' ', '%20')
          if (url.includes(`${newtext}`)) {
            let newurl = url.includes(`&colors=${newtext}`) ? url.replace(`&colors=${newtext}`,'') : null
            let newurl2 = url.replace(`?colors=${newtext}`,'')
            let newurlsuccess =  (newurl === null ? newurl2 : newurl)
          
            window.location = newurlsuccess 
           }else{
             url += `&colors=${e}`
             window.location = url
           }
          
        
        
        }else{
          url += `?colors=${e}`
          window.location = url
      
        }
      }
  return (
    <div>
      <ul className= 'overflow-hidden relative '>
              <h1 className='font1 text-base font-semibold mb-2'>COLOR</h1>
            {
              colors && [...new Set(colors)].map((e)=>
              <li className='items-center '>
              <input type="checkbox" name="color" value={`${e}`} id={`id${e}`}  onClick={()=>colorfun(`${e}`)} className='mb-2 accent-pink-500'  />
              
              <label className='font1 text-sm ml-2 mr-4 mb-2'>{e} <span className='text-xs font-serif font-normal text-slate-400'> ({colors.filter((f)=>f === e).length})</span> </label>
              </li>
              )
            }
           
          </ul>
    </div>
  )
}

export default ColorFilter
