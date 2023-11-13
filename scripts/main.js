console.log('hello world');

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartAside = document.querySelector('.shopping-cart-container');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleShoppingCartAside);
cardsContainer.addEventListener('click', goToProductDetail);

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
    const isMobileMenuClosed = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = !desktopMenu.classList.contains('inactive');
    
    if (isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    if (isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    shoppingCartAside.classList.toggle('inactive');
}

const productList = [];
productList.push(
    {
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'Pantalla',
        price: 220,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'Computadora',
        price: 320,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'Teclado',
        price: 420,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);


function renderProducts(arr) {
    for (product of arr) {
        // Para crear el html desde JS toca crear elemento por elemento e irle agregando las clases y atributos necesarios. Sería ideal tener construido
        // algo de la parte gráfica para tener una idea más clara de lo que se está creando desde JS
        const productCard = document.createElement('div'); // Aquí creamos un div. Se guarda en una variable para poder agregarle la clase posteriormente
        productCard.classList.add('product-card'); // Aquí agregamos la clase product-card al div creado anteriormente
    
        const img = document.createElement('img'); // Aquí creamos un elemento img
        img.setAttribute('src', product.image); // Aquí le asignamos la imagen del producto al atributo src
    
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
        const productFigureImg = document.createElement('img'); // Aquí creamos un elemento img para ir agregando los elementos que queramos
        productFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg'); // Aquí le asignamos la imagen al elemento img creado anteriormente
    
        /**
         * Luego hay que hacer la inserción de elementos según lo maquetado
         */
        productFigure.appendChild(productFigureImg); // Aquí agregamos el elemento img al elemento figure creado anteriormente
    
        productInfo.appendChild(productInfoDiv); // Aquí agregamos el div productInfoDiv al div productInfo
        productInfo.appendChild(productFigure); // Aquí agregamos el elemento figure al div productInfo
    
        productCard.appendChild(img); // Aquí agregamos el elemento img al div productCard
        productCard.appendChild(productInfo); // Aquí agregamos el div productInfo al div productCard
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);

function goToProductDetail() {
    //
}