import React, { useContext } from 'react'
import './MedItem.css'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const MedItem = ({ id, med_name, price, description, image }) => {

    const { currencySymbol } = useContext(AppContext)

    const {

        cartItems,

        addToCart,

        removeFromCart

    } = useContext(StoreContext);

    return (

        <div className='med-item'>

            {/* Medicine Image */}

            <div className="med-item-img-container">

                <img

                    className='med-item-image'

                    src={image}

                    alt=""

                />

            </div>

            {/* Medicine Info */}

            <div className='med-item-info'>

                <div className='med-item-name-rating'>

                    <p>{med_name}</p>

                    <img

                        src={assets.rating_stars}

                        alt=""

                    />

                </div>

                <p className="med-item-description">

                    {description}

                </p>

                {/* Price + Cart Section */}

                <div className='flex items-center justify-between mt-4 gap-3'>

                    {/* Price */}

                    <p className="med-item-price">

                        {currencySymbol} {price}

                    </p>

                    {/* Cart Controls */}

                    {

                        !cartItems[id]

                            ? (

                                <button

                                    onClick={() => addToCart(id)}

                                    className='bg-primary text-white px-4 py-2 rounded-full text-sm hover:opacity-90 transition-all duration-300'

                                >

                                    Add to Cart

                                </button>

                            )

                            : (

                                <div className="flex items-center gap-3 bg-gray-100 px-3 py-2 rounded-full">

                                    <button

                                        onClick={() => removeFromCart(id)}

                                        className='w-7 h-7 rounded-full bg-red-100 text-red-500 text-lg font-bold hover:scale-110 transition-all duration-300'

                                    >

                                        -

                                    </button>

                                    <p className='font-medium min-w-[20px] text-center'>

                                        {cartItems[id]}

                                    </p>

                                    <button

                                        onClick={() => addToCart(id)}

                                        className='w-7 h-7 rounded-full bg-green-100 text-green-500 text-lg font-bold hover:scale-110 transition-all duration-300'

                                    >

                                        +

                                    </button>

                                </div>

                            )

                    }

                </div>

            </div>

        </div>

    )

}

export default MedItem