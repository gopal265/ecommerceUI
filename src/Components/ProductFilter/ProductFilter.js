import React, { Fragment, useEffect,useState } from 'react'


const ProductFilter = ({ product}) => {
const [ colorul, setcolorul ] = useState('max-h-72')
const [colorulbtn, setcolorulbtn] = useState('block')
// const product = [{category:"watch"},{category:"jeans"},{category:'shirt'},{category:"Tshirt"},{category:"watch"}]  
  let gender = ["men","women",'boys','girls']
  let category = [];
  let brand = [];
  let colors = [];
  const getCategories = () =>{
    for(let i =0;i<product.length ;i++){
      category.push(product[i].category)
    
    }
  }
  const getBrands =() =>{
    for(let i = 0 ; i < product.length;i++){
      brand.push(product[i].brand)
    }
  }
  const getColors =() =>{
    for(let i = 0 ; i < product.length;i++){
      colors.push(product[i].colors)
    }
  }
  getCategories()
  getBrands()
  getColors()
  console.log(category)

  function genderfun(e){
    let url = document.URL
  
    if (url.includes('?')) {
      let newtext = e.replace(' ', '%20')
        if (url.includes(`${newtext}`)) {
         let newurl = url.includes(`&gender=${newtext}`) ? url.replace(`&gender=${newtext}`,'') : null
         let newurl2 = url.replace(`?gender=${newtext}`,'')
         let newurlsuccess =  (newurl === null ? newurl2 : newurl)
     
         window.location = newurlsuccess 
        }else{
          url += `&gender=${e}`
          window.location = url
        }
  
      
    
    }else{
      url += `?gender=${e}`
      window.location = url
  
    }
  }
  function categoryfun(e){
    let url = document.URL
   
    if (url.includes('?')) {
      let nexttext1 = e.replace(' ', '%20')
      let newtext = nexttext1.replace(' ', '%20')
     
    
      if (url.includes(`${newtext}`)) {
        let newurl = url.includes(`&category=${newtext}`) ? url.replace(`&category=${newtext}`,'') : null
        let newurl2 = url.replace(`?category=${newtext}`,'')
        let newurlsuccess =  (newurl === null ? newurl2 : newurl)
       
        window.location = newurlsuccess 
       }else{
         url += `&category=${e}`
         window.location = url
       }
  
    }else{
  
      url += `?category=${e}`
      window.location = url
  
    }
  
  }

  function colorfun(e){
    let url = document.URL
  
    if (url.includes('?')) {
      let newtext = e.replace(' ', '%20')
      if (url.includes(`${newtext}`)) {
        let newurl = url.includes(`&color=${newtext}`) ? url.replace(`&color=${newtext}`,'') : null
        let newurl2 = url.replace(`?color=${newtext}`,'')
        let newurlsuccess =  (newurl === null ? newurl2 : newurl)
      
        window.location = newurlsuccess 
       }else{
         url += `&color=${e}`
         window.location = url
       }
      
    
    
    }else{
      url += `?color=${e}`
      window.location = url
  
    }
  }
  


useEffect(() => {
  // check()
 

}, []);


  return (
    <Fragment>
      <div className=''>
       {/* Gender Filter ********************************************** */}
          <ul className=''>
            {
              gender.map((e)=>
              <li className=''>
              <input type="radio" name="gender" value={`${e}`} className='' id={`gender-${e}`}  onClick={()=>genderfun(`${e}`)} />
              <label className=''>{e}</label>
              </li>
              )
            }
           
          </ul>

            {/* categories Filter ******************************************* */}

            <ul className=''>
              <h1 className=''>CATEGORIES</h1>
            {
              category && [...new Set(category)].map((e)=>
              <li className='' onClick={()=>categoryfun(`${e}`)} >
              <input type="checkbox" name="categories" value={`${e}`} id={`id${e}`} className='mb-2 accent-pink-500' />
              <label className='font1 text-sm ml-2 mr-4 mb-2'>{e}<span className='text-xs font-serif font-normal text-slate-400'> ({category.filter((f)=>f === e).length})</span> </label>
              </li>
              )
            }
           
          </ul>
            
            {/* Color filter *************************************************** */}

            <ul className={`pl-8 border-b-[1px] border-slate-200 py-4  ${colorul} overflow-hidden relative `}>
              <h1 className='font1 text-base font-semibold mb-2'>COLOR</h1>
            {
              colors && [...new Set(colors)].map((e)=>
              <li className='items-center '>
              <input type="checkbox" name="color" value={`${e}`} id={`id${e}`}  onClick={()=>colorfun(`${e}`)} className='mb-2 accent-pink-500'  />
              
              <label className='font1 text-sm ml-2 mr-4 mb-2'>{e} <span className='text-xs font-serif font-normal text-slate-400'> ({colors.filter((f)=>f === e).length})</span> </label>
              </li>
              )
            }
           <button className={`absolute bottom-1 right-2 font1 text-[#ff3f6c] ${colorulbtn} `}
           onClick={()=>(setcolorul('max-h-max'), setcolorulbtn('hidden'))}> + more</button>
          </ul>
              {/* Price filter *************************************************** */}
          {/* <ul className={`pl-8 border-b-[1px] border-slate-200 py-4  overflow-hidden relative `}>
              <h1 className='font1 text-base font-semibold mb-2'>PRICE</h1>
           
              <li className='items-center '>
              <input type="checkbox" name="color" value={`price1`}  className='mb-2 accent-pink-500' onClick={()=>price1fun(Math.max(...result[0]))} id={`id${Math.max(...result[0])+1}`} />
              
              <label className='font1 text-sm ml-2 mr-4 mb-2'> Rs. {Math.floor(Math.min(...result[0]))} to Rs. {Math.floor(Math.max(...result[0]))} <span className='text-xs font-serif font-normal text-slate-400'> ({spARRAY.filter((f) => f <=  Math.max(...result[0])).length})</span> </label>
              </li>

              <li className='items-center '>
              <input type="checkbox" name="color" value={`price1`}  className='mb-2 accent-pink-500' onClick={()=>price2fun(Math.min(...result[1]), Math.max(...result[1]))} id={`id${Math.max(...result[1])+1}`} />
              
              <label className='font1 text-sm ml-2 mr-4 mb-2'> Rs. {Math.floor(Math.min(...result[1]))} to Rs. {Math.floor(Math.max(...result[1]))} <span className='text-xs font-serif font-normal text-slate-400'> ({sparraynew()})</span> </label>
              </li>

              <li className='items-center '>
              <input type="checkbox" name="color" value={`price1`}  className='mb-2 accent-pink-500' onClick={()=>price3fun(Math.min(...result[2]))}  id={`id${Math.min(...result[2])+1}`} />
              
              <label className='font1 text-sm ml-2 mr-4 mb-2'> Rs. {Math.floor(Math.min(...result[2]))} to Rs. {Math.floor(Math.max(...result[2]))} <span className='text-xs font-serif font-normal text-slate-400'> ({spARRAY.filter((f) => f >=  Math.min(...result[2])).length})</span> </label>
              </li>
              
          </ul> */}
      </div>
    </Fragment>
  )
}

export default ProductFilter