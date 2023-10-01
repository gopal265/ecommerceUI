import React, { useState } from 'react'
import "./NavBar.css"
import { useNavigate } from 'react-router-dom'
import ProfileHover from '../Home/ProfileHover/ProfileHover'
const NavBar = () => {
    const [displayProfile,setDisplayProfile] = useState(false)
    const navigate = useNavigate()
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white pt-3 pb-3">
                <a className="navbar-brand" href="#" onClick={() =>navigate('/')}>ShopCart</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                            <a className="nav-link" href="#">Men </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Women</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link ">Kids</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link ">Home & Living</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link ">Beauty</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search products" aria-label="Search" />
                        {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                        <div className='navbar-icon center-h' onClick={()=>setDisplayProfile(!displayProfile)} >
                        <i class="fa-regular fa-user"></i>
                        <p>Profile</p>
                        </div >
                        <ProfileHover display={displayProfile} />

                        <div className='navbar-icon center-h' onClick={()=> navigate('/wishlist')} >
                        <i class="fa-regular fa-heart"></i>
                        <p>WishList</p>
                        </div>
                        <div className='navbar-icon center-h' onClick={()=> navigate('/bag')}>
                        <span class="material-symbols-outlined">
                            shopping_bag
                        </span> 
                        <p>Bag</p>
                        </div>
                        
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
