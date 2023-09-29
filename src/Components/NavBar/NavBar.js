
import React, { useState } from 'react'
import "./NavBar.css"
import { useNavigate } from 'react-router-dom'
import ProfileHover from '../Home/ProfileHover/ProfileHover'


// Correct: Declare NavBar once

//class NavBar extends React.Component {
    // ...


const NavBar = () => {
    const [displayProfile,setDisplayProfile] = useState(false)
    const navigate = useNavigate();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white pt-3 pb-3">
                <a className="navbar-brand" href="" onClick={() =>navigate('/')}>ShopCart</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                            <a className="nav-link" href="">Men</a>

                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Women</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link " href="#">Kids</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link " href="#">Home & Living</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link " href="#">Beauty</a>
                        </li>
                    </ul>
                    <form className="form-inline ">
                        <input className="form-control" type="search" placeholder="Search products" aria-label="Search" />
                        {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                        <div className='navbar-icon ' onClick={()=>setDisplayProfile(!displayProfile)} >
                        <i class="fa-regular "></i>
                        <p>Profile</p>
                        </div >
                        <ProfileHover display={displayProfile} />

                        <div className='navbar-icon ' >
                        <i class="fa-regular "></i>
                        <p>WishList</p>
                        </div>
                        <div className='navbar-icon c'>
                        <span class="material">
                            shopping_bag
                        </span> 
                        <p>Bag</p>
                        </div>
                        
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default NavBar
