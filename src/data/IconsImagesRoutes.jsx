const iconsNames = ['menu', 'minus', 'plus', 'cart', 'cartBlanc', 'delete', 'close']

const getIconsPaths = () => {
    const iconsDictList = {}

    for (let iconName of iconsNames) {
        iconsDictList[iconName] = new URL('../assets/images/icon-' + iconName + '.svg', import.meta.url).href
    }
    
    return iconsDictList
}

export const IconsImagesRoutes = getIconsPaths()