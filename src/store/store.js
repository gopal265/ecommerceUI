import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { registeruser, getuser, resendotp, updateuser, verifyOtp, updatedetailsuserreducer } from '../reducers/userReducers';
import {Allproducts, singleProduct} from "../reducers/productReducers"
import { create_bag_reducer, create_wishlist_reducer, delete_bag_reducer, delete_wish_reducer, get_bag_reducer, get_wishlist_reducer, update_qty_bag_reducer } from '../reducers/orderReducers';


const reducer = combineReducers({
      Registeruser: registeruser,
      user : getuser,
      resendotp: resendotp,
      updateuser: updateuser,
      userdetails: verifyOtp,
      allProducts:Allproducts,
      singleProduct: singleProduct,
      wishlist:create_wishlist_reducer,
      wishlist_data:get_wishlist_reducer,
      bag:create_bag_reducer,
      bag_data:get_bag_reducer,
      update_bag: update_qty_bag_reducer,
      updateuser2:updatedetailsuserreducer,
      deletebag:delete_bag_reducer,
      deletewish:delete_wish_reducer
      
})

let initialState = {};

const store = createStore(reducer,initialState,applyMiddleware(thunk))


export default store;