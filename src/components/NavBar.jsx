import React, { useState } from "react";
import '../assets/styles/navbar.scss'
import LogoImage from '../assets/images/logo.svg'
import ImageAvatar from '../assets/images/image-avatar.png'
import { useDisplayCart } from "../hooks/useDisplayCart";
import { ProductsImagesRoutes } from "../data/ProductsImagesRoutes";
import { IconsImagesRoutes } from "../data/IconsImagesRoutes"


const navbarSections = ['Collections', 'Men', 'Women', 'About', 'Contact']
const ProductImages = ProductsImagesRoutes
const IconsImages = IconsImagesRoutes

export const NavBar = (props) => {
    const [displayCart, handleCartIconClick] = useDisplayCart()

    const [elementActiveState, setElementActiveState] = useState("")

    const toggleSideBar = () => {
        if (elementActiveState === "") {
            setElementActiveState("active")
        }

        else {
            setElementActiveState("")
        }
    }

    return (
        <div className="navbar">
            {
                Boolean(elementActiveState) === false &&
                <img src={IconsImages.menu} className="sidebar-icon" onClick={toggleSideBar} alt="icon menu" />
            }
            
            <img src={LogoImage} alt="logo image" />

            <div className={"page-links-container" +  ' ' + elementActiveState}>
                <div className="page-links">
                    {
                        Boolean(elementActiveState) === true &&
                        <img src={IconsImages.close} onClick={toggleSideBar} alt="close-button" />
                    }
                    {navbarSections.map( (section, key) =>
                        {return (
                            <a href="#" key={key} onClick={toggleSideBar}>{section}</a>
                        )}
                    )}
                </div>
            </div>
            
            <div className="user-section">
                <img src={IconsImages.cart} alt="icon cart" onClick={handleCartIconClick}/>

                {
                    props.itemNumber > 0 && <div className="cart-number"><p>{props.itemNumber}</p></div>
                }
                
                {
                    displayCart &&
                    <div className="cart-container">
                        <p>Cart</p>
                        {
                            props.itemNumber == 0 ?
                            <div className="empty-cart">
                                <p>Your cart is empty.</p>
                            </div> :
                            <>
                                <div className="product-container">
                                    <div className="article-container">
                                        <img src={ProductImages[0].main} alt="product-image" />
                                        <div className="price-infos">
                                            <p>Automn Limited Edition Sneakers</p>
                                            <p>$125.00 x {props.itemNumber} <strong>${props.itemNumber * 125}.00</strong></p>
                                        </div>
                                        <img src={IconsImages.delete} alt="delete icon" onClick={props.onReset} />
                                    </div>
                                    <button title="button">Checkout</button>
                                </div>
                            </>
                        } 
                    </div>
                }
                
                <img src={ImageAvatar} alt="image avatar" />
            </div>
        </div>
    )
}
