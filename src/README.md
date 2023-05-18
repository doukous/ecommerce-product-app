# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it


### Links

- Solution URL: [Solution URL here](https://github.com/doukous/ecommerce-product-app)
- Live Site URL: [Live site URL here](https://doukous.github.io/ecommerce-product-app/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox
- [React](https://reactjs.org/) - JS library

### What I learned

I learn to handle static files such as Images and Fonts for production build. I understand better use cases of useContext hook with the cart items handling even if I don't use finally in my project.

Some code that I'm proud of:

```css
.thumbnail-img.active {
        position: relative;

        & > img {
            border: 2px solid $primaryOrange;
        }

        &::before {
            position: absolute;
            content: '';
            background-color: rgba(255, 255, 255, 0.65);
            border-radius: 0.4rem;
            width: 93%;
            height: 87%;
            margin: 2px;
        }
    }
```
```js
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
```

### Continued development

This project make me aware about a lot of production and deployment requirements, specially when using a Web Framework. My respect for DevOps and people in charge of CI/CD just increase. I will definitely deep dive into it !

### Useful resources

- [Static Asset Handling with Vite](https://vitejs.dev/guide/assets.html) - This helped me for understanding assets handling with Vite. It can help for avoiding some mistakes.

- [GitHub Page deployment's resource](https://vitejs.dev/guide/static-deploy.html#github-pages) - This help for the deployment with GitHub Page

- [Css overlay on hover](http://jsfiddle.net/6nkh3u7k/5/) -This inspire me for build overlay on hover


## Author
- Frontend Mentor - [@doukous](hhttps://www.frontendmentor.io/profile/doukous)