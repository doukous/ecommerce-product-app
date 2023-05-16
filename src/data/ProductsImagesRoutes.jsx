const getImagesPaths = () => {
    const imageDictList = []

    for (let i = 1; i < 5; i++) {
        imageDictList.push(
            {
                thumb : new URL('../assets/images/image-product-' + i + '-thumbnail.jpg', import.meta.url).href,
                main: new URL('../assets/images/image-product-' + i + '.jpg', import.meta.url).href 
            }
        )
    }
    
    return imageDictList
}

export const ProductsImagesRoutes = getImagesPaths()