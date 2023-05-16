import React, { useState } from "react";


export const useItemAdjust = () => {
    const [itemNumber, setItemNumber] = useState(0)

    const handlePlusClick = () => {
        setItemNumber(itemNumber => itemNumber + 1)
    }

    const handleMinusClick = () => {
        setItemNumber(itemNumber => itemNumber == 0 ? 0 : itemNumber - 1)
    }

    return [itemNumber, handlePlusClick, handleMinusClick]
}