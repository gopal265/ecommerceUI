import React, { Fragment, useState, useEffect } from 'react'
// import elementClass from 'element-class'
import './bag.css'
import {useSelector, useDispatch} from 'react-redux'
import {getbag, getqtyupdate, deletebag} from '../../actions/order'
import { getuser } from "../../actions/auth";
import { useNavigate, Link } from 'react-router-dom'
import Emptybag from './Emptybag'


const Bag = () => {
    
    const {loading:userloading, user, isAuthentication } = useSelector(state => state.user)
    const {bag, loading:bagloading} = useSelector(state => state.bag_data)
    const [state, setstate] = useState(false)
    const [state1, setstate1] = useState(false)
    const [state2, setstate2] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const steps = ['10% Instant Discount on Canara Bank Credit and Debit cards on a min spend of Rs 2000. TCA',
    '15% Cashback up to Rs 500 on first ZestMoney transaction on a min spend of Rs 2,500.TCA',
    '10% Cashback up to Rs 300 on second or further ZestMoney transaction on a min spend of Rs 2,500.TCA',
    '10% Instant Discount on Bank Of Baroda Credit cards on a min spend of Rs 3,000.TCA',
    '5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA',
    '10% Cashback upto Rs 100 on Paytm Postpaid transaction on a min spend of Rs 1000 . TCA',
    '15% Cashback upto Rs 150 on Freecharge Paylater transaction. TCA',
    '10% Cashback upto Rs 200 on Ola Money Postpaid or wallet transaction on a min spend of Rs 1000 . TCA',
    'Upto Rs 500 Cashback on Mobikwik Wallet Transactions on a min spend of Rs 999.Use code MBK500 on Mobikwik. TCA',
    '5% Cashback upto Rs 150 on a minimum spend of Rs 1,500 with PayZapp. TCA',

];
const [mrp, setmrp] = useState(0)
const [sp, setsp] = useState(0)
const [ds, setds] = useState(0)

if (bagloading === false && state1 === false && bag !== null ) {
    setstate1(true)
    console.log(bag.orderItems.length)
    let va = 0
    let ss = 0
    for (let i = 0; i < bag.orderItems.length; i++) {
        va += bag.orderItems[i].product.mrp * bag.orderItems[i].qty
       ss += bag.orderItems[i].product.sellingPrice * bag.orderItems[i].qty
    }
    setmrp(va)
    setsp(ss)
    let dd = va - ss
    setds(dd)
    
}

// function addclass() {
//     let allli = document.querySelectorAll(`.vis`)

//     for (let i = 0; i < allli.length; i++) {
//         console.log(allli[i])
//         elementClass(allli[i]).toggle('hi')
//         // elementClass(allli[i]).add('vis')
//       }
// }

const [qtyvalue,setQtyvalue] = useState(1)
const [id,setid] = useState('')

function updateqty(e) {
    
   if (e.keyCode == 13) {
    const Data ={
        id:id,
        qty: Number(qtyvalue)
    }
    dispatch(getqtyupdate(Data))
    dispatch(getbag(user._id))
   
   }
    
   
}

const [state3, setstate3] =useState(false)
const {deletebag:baggggg} = useSelector(state=>state.deletebag)

if (state3=== false && baggggg === true ) {
    dispatch(getbag(user._id))
    setstate1(false)
    setstate3(true)
}

function place() {
    navigate('/address/bag')
}


function delbag(user, product) {
    console.log(user)
    const option = {
        product: product,
        user:user
    }
    
    dispatch(deletebag(option))
    setstate3(false)
    
}



useEffect(() => {
    if (state2 === false) {
        if (!user) {
            dispatch(getuser())
        }
        setstate2(true)
    }
  
    if (state === false) {
        if (userloading === false) {
            if (isAuthentication === false) {
                // Alert.info('Log in to access BAG')
                setstate(true)
                
            } else {
                dispatch(getbag(user._id))
                setstate(true)
            }

        }
    }
    
}, [dispatch, user, state,userloading,isAuthentication, navigate ]);

    return (
        <Fragment>
            { isAuthentication === true ?
                
                <Fragment>{
                    bagloading === false &&

            <Fragment>
            {
                (bag !== null  && bag.orderItems.length > 0) ?
                <Fragment >
                <div className='container-fluid'>
                    <div className='row pt-3 pb-3'>
                        <div className='col-md-2'>ShopCart</div>
                        <div className='col-md-8 center'>
                        <span className="">BAG</span> ----------&nbsp;
                        <span className="">ADDRESS</span> ---------- &nbsp;
                        <span className="">PAYMENT</span>
                     </div>
                     <div className='col-md-2'>
                     <span className=''>100% SECURE</span> 
                   </div>
                    </div>

                </div>
        {/* ***************************************************************************************************************** */}
                <div className='container'>
                    <div className='row'>
                <div className="col-md-7">
                    <div className=''>
                        <div className='bag-head'>
                            Available Offers</div>
                        <ul className='bag-offers'>
                        {
                            steps.map((e, i)=>
                            <li className=''>{e}</li>
                            )
                        }
                        </ul>
                        
                    </div>
        
                    <div className=''>
                        {
                            bagloading === false && bag.orderItems.map((e)=>
        
                            <div className='bag-product p-2'>
                            <div className="bag-product-img">
                              <Link to={`/products/${e.product._id}`}>  <img src={e.product.images[0]} alt="" className=' '/></Link>
                            </div>
                            <div className="bag-product-content pl-2">
                                <h1 className='bag-product-brand'>{e.product.brand}</h1>
                                <h2 className='bag-product-title'> {e.product.title} </h2>
                                <div className='bag-product-seller'>Sold by: {e.product.brand}</div>
                               
                                <div className='bag-product-size pt-2'> <span className=''>Size:</span>  {e.product.size}  <span className='ml-10'>Qty:</span> 
                                <input type="number" name="quantity" id="quantity" min='1' max={e.product.stock}  defaultValue={e.qty} 
                                className='bag-product-qty'onChange={(f)=>(setQtyvalue(f.target.value) ,setid(e._id))} onKeyUp={(e)=>updateqty(e)}  /> </div>
                               
                                <div className='bag-product-brand pt-1'> <span className="pr-2">&#8377; {Math.round(e.product.sellingPrice)}</span><span className="bag-product-seller">&#8377; {e.product.mrp}</span><span className="ml-2 text-[#f26a10]">&#8377; {-Math.round(e.product.mrp - e.product.sellingPrice)} OFF</span> </div>
                                <p className='bag-product-seller pt-1'>7 days return Available</p>
                                
                                
                            </div>
                            <div className='bag-delete'>
                            <span className='' onClick={()=>delbag( user._id, e.product._id)} ><i class="fa-solid fa-xmark"></i></span>
                            </div>
                        </div>
                            )
        
                        }
                    </div>
                </div>
        
                <div className="col-span-5 mx-2 border-l-[0px] border-slate-200 pl-4 text-[14px] 2xl:ml-4 xl:ml-4 lg:ml-4 2xl:border-l-[1px] xl:border-l-[1px] lg:border-l-[1px]">
                     <div className='mt-2 '>
                         <h1 className='font1 text-[#535766] '>PRICE DETAILS<span className='text-[12px]'>&nbsp;({bagloading === false && bag.orderItems.length} items)</span></h1>
                         <div className='text-[#535766] relative mt-2'>Total MRP<span className='absolute right-0'>&#8377;&nbsp;{mrp}</span></div>
                         <div className='text-[#535766] relative mt-2'>Discount on MRP<span className='absolute right-0 text-[#0db7af]'>-&#8377;&nbsp;{Math.round(ds)}</span></div>
                         <div className='text-[#535766] relative mt-2'> Coupon Discount<span className='absolute right-0 text-[#ff3f6c]'>Apply Coupon</span></div>
                         <div className='text-[#535766] relative mt-2 mb-2'> Convenience Fee<span className='absolute right-0 '><span className='line-through'>-&#8377;&nbsp;99</span> <span className='no-underline text-[#0db7af]'>FREE</span> </span></div>
                         <div className='py-2 border-t-[1px] border-slate-200 bg-white 2xl:relative xl:relative lg:relative'>
                            <div className='relative font1 text-base'>Total Amount<span className='absolute right-0'>&#8377;&nbsp;{Math.round(sp)}</span></div>
                            
                            <button className='mt-2 bg-[#ff3f6c] text-center w-full py-3 font1 text-bold text-white' onClick={place} > PLACE ORDER </button>
                         </div>
                    </div>   
        
                </div>
                </div>
                </div>
                    </Fragment>

                :

                <Emptybag/> 

                
            }
                </Fragment>

        }
        </Fragment>
           
            :

            <Emptybag/>
        }
        </Fragment>
    )
}

export default Bag