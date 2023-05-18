import React from "react"
import { useState } from "react"


export const useHandlePopupImage = () => {
    const [mainImageIndex, setMainImageIndex] = useState(0)

    const handlePrevClick = () => {
        const prevActiveImg = document.querySelectorAll('.thumbnail-img')
        prevActiveImg[mainImageIndex].classList.toggle('active')

        if (mainImageIndex > 0) {
            setMainImageIndex(mainImageIndex - 1)
            prevActiveImg[mainImageIndex - 1].classList.toggle('active')
        }   

        else {
            setMainImageIndex(3)
            prevActiveImg[3].classList.toggle('active')
        }
    }
    
    const handleNextClick = () => {
        const prevActiveImg = document.querySelectorAll('.thumbnail-img')
        prevActiveImg[mainImageIndex].classList.toggle('active')

        if (mainImageIndex < 3) {
            setMainImageIndex(mainImageIndex + 1)
            prevActiveImg[mainImageIndex + 1].classList.toggle('active')
        }
        
        else {
            setMainImageIndex(0)
            prevActiveImg[0].classList.toggle('active')
        }

    }

    const handleImageClick = (event, key) => {
        const prevActiveImg = document.querySelector('.thumbnail-img.active')

        if (!prevActiveImg != true) {
            prevActiveImg.classList.toggle('active')
        }
    
        setMainImageIndex(key)
        
        const currentActiveImg = event.target.parentElement
        currentActiveImg.classList.toggle('active')
    }

    return [
        mainImageIndex, handlePrevClick,
        handleNextClick, handleImageClick
    ]
}