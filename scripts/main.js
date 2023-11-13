console.log('hello world');

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productsCounter = document.querySelector('.products-counter');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartAside = document.querySelector('.shopping-cart-container');
const myOrderContent = document.querySelector('.my-order-content');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('.product-detail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleShoppingCartAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
shoppingCartAside.addEventListener('onchange', showAddedProducts2);

const productList = [];
productList.push(
    {
        id: 1,
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        id: 2,
        name: 'Pantalla',
        price: 220,
        image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
        id: 3,
        name: 'Computadora',
        price: 320,
        image: 'https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
        id: 4,
        name: 'Teclado',
        price: 420,
        image: 'https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg?auto=compress&cs=tinysrgb&w=1600'
    }
);

let cartItems = [];
function addToCart(id) {
    
    const product = productList.find(item => item.id === id);
    cartItems.push(product);
    
    productsCounter.innerText = cartItems.length;
    showAddedProducts2(cartItems);
    getCartTotal(cartItems);
}

/*for (product of cartItems) {
    if (cartItems.length > 0) {
        total = 0;
        console.log('Pasa por el if y el total es ' + total);
        myOrderTotalPrice.innerHTML(toString(total));
    }
}*/

function clearShoppingCart() {
    const existingCartItems = shoppingCartAside.querySelectorAll('.shopping-cart');

    existingCartItems.forEach(element => {
        element.remove();       
    });
}

function showAddedProducts(array, id) {
    for (product of array) {
        if (product.id === id) {
            const cartItem = document.createElement('div');
            cartItem.classList.add('shopping-cart');
            cartItem.innerHTML = `
            <figure>
                <img src="${product.image}" alt="${product.name}"> 
            </figure>
            <p>${product.name}</p>
            <p>${product.price}</p>
            <img src="./icons/icon_close.png" alt="close" onclick="removeFromCart(${product.id})">
            `;

            shoppingCartAside.appendChild(cartItem);
            myOrderContent.insertAdjacentElement('beforebegin', cartItem);
        }
    }

}

function showAddedProducts2() {

    clearShoppingCart();

    for (product of cartItems) {
        const cartItem = document.createElement('div');
        cartItem.classList.add('shopping-cart');
        cartItem.innerHTML = `
        <figure>
            <img src="${product.image}" alt="${product.name}"> 
        </figure>
        <p>${product.name}</p>
        <p>${product.price}</p>
        <img src="./icons/icon_close.png" alt="close" onclick="removeFromCart(${product.id})">
        `;

        shoppingCartAside.appendChild(cartItem);
        myOrderContent.insertAdjacentElement('beforebegin', cartItem);
    }

}

// function showCart(array) {
//     for (product of array) {
//         const cartItem = document.createElement('div');
//         cartItem.classList.add('shopping-cart');
//         cartItem.innerHTML = `
//         <figure>
//             <img src="${product.image}" alt="${product.name}"> 
//         </figure>
//         <p>${product.name}</p>
//         <p>${product.price}</p>
//         <img src="./icons/icon_close.png" alt="close" onclick="removeFromCart(${product.id})">
//         `;

//         shoppingCartAside.appendChild(cartItem);
//         myOrderContent.insertAdjacentElement('beforebegin', cartItem);
    
//     }
// }

function removeFromCart(id) {
    const product = cartItems.find(item => item.id === id);
    
    const index = cartItems.indexOf(product);
    cartItems.splice(index, 1);
    
    productsCounter.innerText = cartItems.length;
    showAddedProducts2(cartItems);
    getCartTotal(cartItems, 'resta');
}

function getCartTotal(array, option='suma') {
    let total = 0;
    for (product of array) {
        if (option === 'suma') {
            total += product.price;
        } else if (option === 'resta') {
            total -= product.price;
            console.log('Resta: ' + total);
        }
    }
    
    const orderTotal = document.querySelector('.order-value');
    orderTotal.innerHTML = `$${total}`;
}

function toggleDesktopMenu() {
    const isShoppingCartClosed = !shoppingCartAside.classList.contains('inactive');

    if (isShoppingCartClosed) {
        shoppingCartAside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isShoppingCartClosed = !shoppingCartAside.classList.contains('inactive');

    if (isShoppingCartClosed) {
        shoppingCartAside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCartAside() {
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    const isProductDetailOpen = !productDetailContainer.classList.contains('inactive');
    
    if (isMobileMenuOpen) {
        mobileMenu.classList.add('inactive');
    }

    if (isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive');
    }

    if (isProductDetailOpen) {
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartAside.classList.toggle('inactive');
}

function goToProductDetail() {
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    const isShoppingCartOpen = !shoppingCartAside.classList.contains('inactive');

    if (isMobileMenuOpen) {
        mobileMenu.classList.add('inactive');
    }

    if (isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive');
    }

    if (isShoppingCartOpen) {
        shoppingCartAside.classList.add('inactive');
    }

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

function renderProducts(arr) {
    for (product of arr) {
        // Para crear el html desde JS toca crear elemento por elemento e irle agregando las clases y atributos necesarios. Sería ideal tener construido
        // algo de la parte gráfica para tener una idea más clara de lo que se está creando desde JS
        const productCard = document.createElement('div'); // Aquí creamos un div. Se guarda en una variable para poder agregarle la clase posteriormente
        productCard.classList.add('product-card'); // Aquí agregamos la clase product-card al div creado anteriormente
    
        const img = document.createElement('img'); // Aquí creamos un elemento img
        img.setAttribute('src', product.image); // Aquí le asignamos la imagen del producto al atributo src
        img.addEventListener('click', goToProductDetail); // Aquí agregamos el evento click al elemento img
    
        const productInfo = document.createElement('div'); // Aquí creamos un div para ir agregando los elementos que queramos
        productInfo.classList.add('product-info'); // Aquí agregamos la clase product-info al div creado anteriormente
    
        const productPrice = document.createElement('p'); // Aquí creamos un elemento p para ir agregando el precio del producto
        productPrice.innerText = '$' + product.price; // Aquí le asignamos el precio del producto al elemento p creado anteriormente
        
        const productInfoDiv = document.createElement('div'); // Aquí creamos otro div para ir agregando los elementos que queramos
    
        const productName = document.createElement('p'); // Aquí creamos un elemento p para ir agregando el nombre del producto
        productName.innerText = product.name; // Aquí le asignamos el nombre del producto al elemento p creado anteriormente
    
        productInfoDiv.appendChild(productPrice); // Aquí agregamos el elemento p creado anteriormente al div productInfoDiv
        productInfoDiv.appendChild(productName); // Aquí agregamos el otro elemento p
    
        const productFigure = document.createElement('figure'); // Aquí creamos un elemento figure para ir agregando los elementos que queramos
        const productFigureButton = document.createElement('button');
        productFigureButton.classList.add('add-to-cart-button');
        productFigureButton.addEventListener('click', addToCart);
        const productFigureImg = document.createElement('img'); // Aquí creamos un elemento img para ir agregando los elementos que queramos
        productFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg'); // Aquí le asignamos la imagen al elemento img creado anteriormente
        
    
        /**
         * Luego hay que hacer la inserción de elementos según lo maquetado
         */
        productFigureButton.appendChild(productFigureImg);

        productFigure.appendChild(productFigureButton); // Aquí agregamos el elemento img al elemento figure creado anteriormente
    
        productInfo.appendChild(productInfoDiv); // Aquí agregamos el div productInfoDiv al div productInfo
        productInfo.appendChild(productFigure); // Aquí agregamos el elemento figure al div productInfo
    
        productCard.appendChild(img); // Aquí agregamos el elemento img al div productCard
        productCard.appendChild(productInfo); // Aquí agregamos el div productInfo al div productCard
    
        cardsContainer.appendChild(productCard);
    }
}

function renderProducts2(arr) {
    for (product of arr) {
        const productCard = document.createElement('div'); // Aquí creamos un div. Se guarda en una variable para poder agregarle la clase posteriormente
        productCard.classList.add('product-card'); // Aquí agregamos la clase product-card al div creado anteriormente

        productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-img">
                <div class="product-info-card">
                    <div>
                        <p>$ ${product.price}</p>
                        <p>${product.name}</p>
                    </div>
                    <figure>
                        <button onclick="addToCart(${product.id})" class"add-cart-style">
                            <img src="./icons/bt_add_to_cart.svg" alt="add-to-cart">
                        </button>
                    </figure>
                </div>

        `;

        cardsContainer.appendChild(productCard);

        const productImg = productCard.querySelector('.product-img');
        productImg.addEventListener('click', goToProductDetail);

    }
}

// renderProducts(productList);
renderProducts2(productList);
showAddedProducts2(cartItems);