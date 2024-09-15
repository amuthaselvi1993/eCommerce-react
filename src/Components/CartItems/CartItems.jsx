import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/remove_icon.png'
export const CartItems = () => {
    const {all_product, cartItems, removeFromCart, getBillAmount, getDiscount, getTotalCartAmount, plusToCart} = useContext(ShopContext)

  return (
    <div className='cartitems'>
        <hr/>
        <div className='cartitems-format-main'>
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <div className='cartitems-format-qty'><p>Remove Quantity Add</p></div>
            {/* <p></p>
            <p>Add</p> */}
            <p>Total</p>
        </div>
        <hr/>
        {all_product.map((e)=>{
            if(cartItems[e.id]>0)
            {
               return <div>
                <div className='cartitems-format-main-items'>
                    <img src ={e.image} alt="" className='cartitems-product-icon'/>
                    <p>{e.name}</p>
                    <p>NOK {e.new_price}</p>
                    <div className='cartitems-format-qty'><img className='cartitems-remove-icon' src = {remove_icon} onClick={()=>{removeFromCart(e.id)}} alt= ""/>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <img className='cartitems-remove-icon' src = {remove_icon} onClick={()=>{plusToCart(e.id)}} alt= ""/>
                    </div> 
                    <p>NOK {e.new_price* cartItems[e.id]}</p>
                   
                </div>
            </div>
            }
            return null;
            })}
            <hr/>
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart totals</h1>
                    <div>
                        <div className='cartitems-total-item'>
                            <p>Bill Amount</p>
                            <p>NOK {getBillAmount()}</p>
                        </div>
                        <div className='cartitems-total-item'>
                            <p>Discounts</p>
                            <p>NOK {getDiscount()}</p>
                        </div>
                        <div className='cartitems-total-item'>
                            <p>Sum Total</p>
                            <p>NOK {getTotalCartAmount()}</p>
                        </div>
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr/>
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>NOK {getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='Promo Code'/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
   
    </div>
  )
}
