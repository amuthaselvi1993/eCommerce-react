import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box">Reviews</div>
        </div>
        <div className='descriptionbox-description'>
            <p>An e-commerce website is an online platform that facilitates
            buying and selling of products or services over the internet and 
            serves as a virtual marketplace where businesses and individuals 
            showcase their products, interact with customers, and conduct 
            transactions without the need of physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.</p>
            <p>
                E-commerce websites typically display products or services with a
                detailed description, images, prices, and any available variations.
                (e.g sizes, colors) Each product usually has its own dedicated brands
                with relevant information.
            </p>
        </div>
    </div>
  )
}
