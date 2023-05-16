import React from "react"
import { useState } from "react"


export const useHandlePopupImage = () => {
    const [mainImageIndex, setMainImageIndex] = useState(0)

    const handlePrevClick = () => {
        if (mainImageIndex > 0) {
            setMainImageIndex(mainImageIndex - 1)
        }   

        else {
            setMainImageIndex(3)
        }
        const prevActiveImg = document.querySelector('.thumbnail-img.active')

        if (!prevActiveImg != true) {
            prevActiveImg.classList.toggle('active')
        }

        const currentActiveImg = document.querySelectorAll('.thumbnail-img')[mainImageIndex]
        currentActiveImg.classList.toggle('active')
    }
    
    const handleNextClick = () => {

        if (mainImageIndex < 3) {
            setMainImageIndex(mainImageIndex + 1)
        }
        
        else {
            setMainImageIndex(0)
        }

        const prevActiveImg = document.querySelector('.thumbnail-img.active')

        if (!prevActiveImg != true) {
            prevActiveImg.classList.toggle('active')
        }

        const currentActiveImg = document.querySelectorAll('.thumbnail-img')[mainImageIndex]
        currentActiveImg.classList.toggle('active')
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