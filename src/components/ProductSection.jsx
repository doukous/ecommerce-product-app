import React from "react";
import { IconsImagesRoutes } from "../data/IconsImagesRoutes";
import { ImagesRoutes } from "../data/ProductsImagesRoutes";
import { useItemAdjust } from "../hooks/useItemAdjust"
import { useHandlePopupImage } from "../hooks/useHandlePopupImage";
import { useSetDisplayState } from "../hooks/useSetDisplayState";
import '../assets/styles/product-section.scss'


export const ProductSection = (props) => {

    const [
        mainImageIndex, handlePrevClick,
        handleNextClick, handleImageClick ] = useHandlePopupImage()    

    const [itemNumber, handlePlusClick, handleMinusClick] = useItemAdjust()

    const [popupDisplayState, handlePopupDisplay] = useSetDisplayState()

    return (
        <div className="product-section">
            <div className="image-section">
                {   
                    (popupDisplayState && window.screen.width > 500) &&
                    <div className="popup-image">

                        <div className="image-container">
                            <img className="main-image" src={ImagesRoutes[mainImageIndex].main}
                                alt="displayed image"
                            />

                            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg" className="previous-btn" onClick={handlePrevClick}>
                                <path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" />
                            </svg>

                            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg" className="next-btn" onClick={handleNextClick}>
                                <path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" />
                            </svg>
                        
                            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg" className="close-btn" onClick={handlePopupDisplay}>
                                <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" 
                                    fill="#ffffff"
                                fillRule="nonzero"/>
                            </svg>
                        </div>
                        
                        <div className="thumbnails-images">
                            {ImagesRoutes.map((image, key) => {
                                return (
                                    (key == false) ?
                                    <div className={'thumbnail-img active'} key={key}>
                                        <img src={image.thumb}
                                            key={key} 
                                            onClick={e => handleImageClick(e, key)}
                                            alt={`thumbnail image ${key + 1}`} 
                                        />
                                    </div>
                                     :
                                    <div className={'thumbnail-img'} key={key}>
                                        <img src={image.thumb}
                                            key={key} 
                                            onClick={e => handleImageClick(e, key)}
                                            alt={`thumbnail image ${key + 1}`} 
                                        />
                                    </div> 
                                )})
                            }
                        </div>
                    </div>
                }

                <img className="main-image" src={ImagesRoutes[mainImageIndex].main}
                    onClick={handlePopupDisplay}
                    alt="displayed image"
                />
                
                <div className="thumbnails-images">
                    {
                    ImagesRoutes.map((image, key) => {
                        return (
                            (key == false) ?
                            <div className={'thumbnail-img active'} key={key}>
                                <img src={image.thumb}
                                    key={key} 
                                    onClick={e => handleImageClick(e, key)}
                                    alt={`thumbnail image ${key + 1}`} 
                                />
                            </div>
                                :
                            <div className={'thumbnail-img'} key={key}>
                                <img src={image.thumb}
                                    key={key} 
                                    onClick={e => handleImageClick(e, key)}
                                    alt={`thumbnail image ${key + 1}`} 
                                />
                            </div> 
                        )
                    })
                    }
                </div>
            </div>

            <div className="product-specification">
                <h1>SNEAKER COMPANY</h1>
                <h2>Fall Limited Edition Sneakers</h2>
                <p>
                    These low-profile sneakers are your perfect casual wear companion. Featuring a 
                    durable rubber outer sole, they'll withstand everything the weather can offer.
                </p>

                <div className="price-section">
                    <p>$125.00</p>
                    <p>50%</p>
                    <p>$250.00</p>
                </div>

                <div className="add-cart-item">
                    <div className="toggle-value">
                        <img src={IconsImagesRoutes.minus}
                            onClick={handleMinusClick} 
                            alt="minus button"
                        />
                        
                        <p>{itemNumber}</p>

                        <img src={IconsImagesRoutes.plus}
                            onClick={handlePlusClick} 
                            alt="plus button"
                        />
                    </div>
                    
                    <button type="button" onClick={(event) => props.onSubmit(event)}>
                        <img src={IconsImagesRoutes.cartBlanc} alt="icon cart" />
                        <p>Add to cart</p> 
                    </button>
                </div>
            </div>
        </div>
    )
} 