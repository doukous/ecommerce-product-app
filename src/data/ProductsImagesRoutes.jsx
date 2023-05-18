const images = import.meta.glob('../assets/images/image-product-*.jpg', {eager: true})

const getImagesRoutes = () => {
    const imageDictList = []

    for (let i = 1; i < 5; i++) {
        imageDictList.push(
            {
                thumb : images['../assets/images/image-product-' + i + '-thumbnail.jpg'].default,
                main: images['../assets/images/image-product-' + i + '.jpg'].default 
            }
        )
    }
    
    return imageDictList
}

export const ImagesRoutes = getImagesRoutes()