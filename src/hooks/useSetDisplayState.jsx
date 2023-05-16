import React, { useState } from "react";


export const useSetDisplayState = () => {

    const [popupDisplayState, setpopupDisplayState] = useState(false)
        
    const handlePopupDisplay = () => {
        return popupDisplayState ? setpopupDisplayState(false) : 
        setpopupDisplayState(true)
        }

        return [popupDisplayState, handlePopupDisplay]
    }