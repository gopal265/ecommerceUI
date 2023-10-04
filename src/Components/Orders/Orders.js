import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { json } from 'react-router-dom'
import { getOrders } from '../../actions/order'

const Orders = () => {
    const {orders} = useSelector(state => state.orders)
    const {user} = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getOrders(user._id))
    },[])
  return (
    <div>
      {JSON.stringify(orders)}
    </div>
  )
}

export default Orders
