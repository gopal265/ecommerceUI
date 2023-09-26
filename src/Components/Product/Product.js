import React, { Fragment, useEffect, useState } from 'react'
import './Product.css'
// import { AiFillStar } from 'react-icons/ai'
// import { BiRupee } from 'react-icons/bi'
// import { IoIosHeartEmpty } from 'react-icons/io'
import { Link } from 'react-router-dom'
// import { LazyLoadImage } from 'react-lazy-load-image-component';



const Product = ({ pro}) => {

    const product = {brand:"boohoo",title:"Mid Top block heels",sellingPrice:2004,mrp:5010,images:[{url:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/20924918/2022/11/28/a39c98cc-5142-444e-bacd-1e8791970cf31669631789366SandalsBoohooWomenHeelsBoohooWomenHeelsBoohooWomenSandalsBoo1.jpg'}],size:"EURO37"}
    console.log(product.images)
    const [display,setDisplay] = useState(false)
    // let slideIndex = 1;

    // const currentSlide = (n) => {

    //     showSlides(slideIndex = n);
    // }

    // const showSlides = (n) => {

    //     let i;
    //     let slides = document.getElementsByClassName(pro.style_no);
    //     let dots = document.getElementsByClassName(`${pro.style_no}1`);

    //     if (n > slides.length) { slideIndex = 1 }
    //     if (n < 1) { slideIndex = slides.length }
    //     for (i = 0; i < slides.length; i++) {
    //         slides[i].style.display = "none";
    //     }
    //     for (i = 0; i < dots.length; i++) {
    //         dots[i].className = dots[i].className.replace(" active", "");

    //     }

    //     slides[slideIndex - 1].style.display = "block";
    //     dots[slideIndex - 1].className += " active";
    // }

    // const showdiv = () => {
    //     let dotsdiv = document.getElementsByClassName(`${pro.style_no}hover`);
    //     dotsdiv[0].className += " 2xl:block lg:block xl:block";
    // }

    // const notshowdiv = () => {

    //     document.querySelector(`.${pro.style_no}hover`).classList.remove('2xl:block')
    //     document.querySelector(`.${pro.style_no}hover`).classList.remove('lg:block')
    //     document.querySelector(`.${pro.style_no}hover`).classList.remove('xl:block')
    // }
    // // showSlides(slideIndex);
    // var timer;

    // const changeimg = () => {
    //     let i = 1;
    //     timer = setInterval(function () {

    //         let slides = document.getElementsByClassName(pro.style_no);
    //         if (i > slides.length) { i = 0 }
    //         i++
    //         currentSlide(i)


    //     }, 1000);
    // }

    // function stopchangeimg() {
    //     clearInterval(timer);
    //     currentSlide(1)
    // }

    // useEffect(() => {
    //     showSlides(slideIndex)

    // }, [showSlides]);

    return (
        <>
            
        { product.images[0].url && 
            
            <>
                <div className='product-wrapper'>
                    <div>
                        <img src={product.images[0].url} />
                        </div>
                    <div className='visible-class pl-3'>
                        <div className='brand pt-2 pb-1'>{product.brand}</div>
                        <div className='title pb-1'>{product.title}</div>
                        <div className='center-v prices'>
                        <div className='sellingprice'>{product.sellingPrice}</div>
                        <div className='mrp'>{product.mrp}</div>
                        <div className='discount'>({Math.abs(Math.round(product.sellingPrice / product.mrp * 100 - 100))}% OFF)</div>
                        </div>
                        
                        </div> 
                        
                        <div className='hover-class'>
                        <div className=' wishlist center full-width'><span><i class="fa-regular fa-heart"></i></span>Wishlist</div>
                        <div className=' pl-3'>
                        
                        <div className='title pb-1'>Sizes : {product.size}</div>
                        <div className='center-v prices'>
                        <div className='sellingprice'>{product.sellingPrice}</div>
                        <div className='mrp'>{product.mrp}</div>
                        <div className='discount'>({Math.abs(Math.round(product.sellingPrice / product.mrp * 100 - 100))}% OFF)</div>
                        </div>
                        
                        </div> 
                        </div>
                        

                </div>


            </>

            
            }

                </>           
    )
    }     

export default Product