const iconsImages = import.meta.glob('../assets/images/icon-*.svg', {eager: true})

const iconsNames = ['menu', 'minus', 'plus', 'cart', 'cartBlanc', 'delete', 'close']

const getIconsImagesRoutes = () => {
    const iconsDictList = {}

    for (let iconName of iconsNames) {
        iconsDictList[iconName] = iconsImages['../assets/images/icon-' + iconName + '.svg'].default
    }
    
    return iconsDictList
}

export const IconsImagesRoutes = getIconsImagesRoutes()