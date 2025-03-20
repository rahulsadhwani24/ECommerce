import React, { useState } from 'react'
import { CustomProductUseState } from '../hooks/CustomProductUseState'
import { AddToBagCustomUseState } from '../hooks/AddToBagCustomUseState'

function DetailsCard({product}) {
    const [isWishListed, setAddToWishlist] = useState('🤍 Wishlist')
    const [isAddedToBag, setToBag] = useState('Add to Bag')
    const [wishlist, addToWishlist] = CustomProductUseState([])
    const [productsOnBag, addProductToBag] = AddToBagCustomUseState([])

    function wishListHandler(product){
        setAddToWishlist("❤ Wishlisted");
        addToWishlist(product)
    }
    
    function BagHandler(product){ 
        setToBag('✔Added');
        addProductToBag(product)
    }

    let prod = product[0]
    let actualPrice;
    //Checking Price
    if(prod){
        actualPrice = (prod.price + (prod.price * prod.discountPercentage/100)).toFixed(2)
  return (
    <div className='productdetailscard'>
        <div className="productImage">
            <img src={prod.thumbnail} alt="" />
        </div>
        <div className="productDetails">
            <div className='div'><h2 className="brandName">{prod.brand}</h2>
            <h4 className="productTitle">{prod.title}</h4>
            <div className="ratingsCount"><span>{prod.rating} ⭐</span> | <span className='ratingCount'>{prod.reviews.length} Ratings</span></div>
            <h3 className="price">${prod.price} <span className='actualPrice'>${actualPrice}</span> <span className="discount">({prod.discountPercentage}%)</span></h3>
            <p className='taxes'>Inclusive of all taxes</p></div>
            <div className='buttonsWrapper'>
                <div className="addToCart button" 
                onClick={ () => { BagHandler(prod) }}>{isAddedToBag}</div>
                <div className="wishlistbutton button" 
                onClick={ () => { wishListHandler(prod) }}>{isWishListed}</div>
            </div>
            <div className='details'><span className='title'>Product Details</span>
                <p className="availability">{prod.availabilityStatus}</p>
                <h4 className="productDescription">{prod.description}</h4>
                <h4 className="Category">Category: {prod.category}</h4>
                <p className='returnPolicy'>{prod.returnPolicy}</p>
                <p className='warrenty'>{prod.warrantyInformation}</p>
                <p className='shipping'>{prod.shippingInformation}</p>
            </div>
            <div className='reviews'>
                <span className='title'>Customer Reviews</span>
                {prod.reviews.map((review, idx) => {
                    return <div key={idx}>
                        <div><span className='reviewerName'>{review.reviewerName}</span> | <span className="date">{review.date}</span></div>
                        <p className="message">{review.comment}</p>
                        <p className="rating">{review.rating}⭐</p>
                    </div>
                })}
            </div>
        </div>
    </div>
  )
    }
}

export default DetailsCard