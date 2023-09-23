import React, { Fragment } from 'react'
// import Footer from '../../Footer/Footer'
import "./OverView.css"
import Sidebar from './SideBar'
const Overview = () => {
  const user = { firstName: "hi", lastName: "hello", email: '123r', phoneNumber: 12334, userName: 'redyeye' }
  return (
    <Fragment>
      <div className='overview-wrapper container p-5'>
        <div className='overview-head'>
          <h1 className=''>Account</h1>
          <p className=''>{user.userName}</p>
        </div>
        <hr></hr>
        <div className='row'>
          <div className='col-md-2 sidebar'>
            <Sidebar />
          </div>
          <div className='col-md    overview-profile-container '>
            <div className='overview-profile-wrapper center-h mt-4 ml-1 pt-5'>
            <div className='overview-profile '>
              Profile Details
        
            </div>
            <div className='horizontal'>
              <hr />
            </div>
            <div className='profile-details'>
              <table >
                

                <tbody>
                  <tr>

                    <td>Full Name</td>
                    <td>{user.firstName + "" + user.lastName}</td>

                  </tr>
                  <tr>

                    <td>Mobile Number</td>
                    <td>{user.phoneNumber}</td>

                  </tr>
                  <tr>
                    <td>Email ID</td>
                    <td>{user.email}</td>
                  </tr>
                  <tr>
                    <td>Gender</td>
                    <td>{user.gender ? user.gender : "Not added"}</td>
                  </tr>
                  <tr>
                    <td>Location</td>
                    <td>{user.address ? user.address.address1 : "Not added"}</td>
                  </tr>
                  <tr>
                    <td>City</td>
                    <td>{user.address ? user.address.city : "Not added"}</td>
                  </tr>
                  <tr>
                    <td>PinCode</td>
                    <td>{user.address ? user.address.pincode : "Not added"}</td>
                  </tr>
                </tbody>
              </table>
              <div>
                <button className='login-button edit-btn'>Edit</button>
              </div>
              </div>
            </div>






          </div>
        </div>

      </div>
      {/* 
          <Footer/> */}

    </Fragment>

  )
}

export default Overview