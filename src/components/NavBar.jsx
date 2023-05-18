import React, { useState } from "react";
import { useDisplayCart } from "../hooks/useDisplayCart";
import { ImagesRoutes } from "../data/ProductsImagesRoutes";
import { IconsImagesRoutes } from "../data/IconsImagesRoutes"
import '../assets/styles/navbar.scss'


const navbarSections = ['Collections', 'Men', 'Women', 'About', 'Contact']

const LogoImage = new URL('../assets/images/logo.svg', import.meta.url).href
const ImageAvatar = new URL('../assets/images/image-avatar.png', import.meta.url).href 

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
                <img src={IconsImagesRoutes.menu} className="sidebar-icon" onClick={toggleSideBar} alt="icon menu" />
            }
            
            <img src={LogoImage} alt="logo image" />

            <div className={"page-links-container" +  ' ' + elementActiveState}>
                <div className="page-links">
                    {
                        Boolean(elementActiveState) === true &&
                        <img src={IconsImagesRoutes.close} onClick={toggleSideBar} alt="close-button" />
                    }
                    {navbarSections.map( (section, key) =>
                        {return (
                            <a href="#" key={key} onClick={toggleSideBar}>{section}</a>
                        )}
                    )}
                </div>
            </div>
            
            <div className="user-section">
                <img src={IconsImagesRoutes.cart} alt="icon cart" onClick={handleCartIconClick}/>

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
                                        <img src={ImagesRoutes[0].main} alt="product-image" />
                                        <div className="price-infos">
                                            <p>Automn Limited Edition Sneakers</p>
                                            <p>$125.00 x {props.itemNumber} <strong>${props.itemNumber * 125}.00</strong></p>
                                        </div>
                                        <img src={IconsImagesRoutes.delete} alt="delete icon" onClick={props.onReset} />
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
