import React, { useState } from "react";


export const useSyncCart = () => {
    const [itemTotal, setItemTotal] = useState(0)

    function handleCartSubmit(event) {
        const itemNumber = parseInt(
            event.currentTarget.parentNode.firstChild.innerText
        )
    
        setItemTotal(itemTotal + itemNumber)
    }
    
    function resetCartItemNumber () {
        setItemTotal(0)
    }

    return [itemTotal, handleCartSubmit, resetCartItemNumber]
}
 