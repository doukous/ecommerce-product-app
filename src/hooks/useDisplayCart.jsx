import React, { useState } from "react";


export const useDisplayCart = () => {
    const [displayCart, setDisplayCart] = useState(false)

        const handleCartIconClick = () => {
            if (displayCart === false) {
                setDisplayCart(true)
            }

            else {
                setDisplayCart(false)
            }
        }
    
    return [displayCart, handleCartIconClick]
}