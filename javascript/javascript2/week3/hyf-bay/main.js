console.log('Script loaded');

const products = getAvailableProducts();
console.log(products);

/*
[{
    id: 23771823,
    name: 'Flat screen',
    price: 4000,
    rating: 4.2,
    shipsTo: [ 'denmark', 'germany'],
},
...]
*/

function renderProducts(array) {
    const ul = document.querySelector('section.products > ul');
    const li = document.createElement('li');
    while (ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }
    ul.appendChild(li);

    array.forEach(object => {
        const subUl = document.createElement('ul');
        li.appendChild(subUl);

        subUl.appendChild(makeListItem('name', object.name));
        subUl.appendChild(makeListItem('price', object.price));
        subUl.appendChild(makeListItem('rating', object.rating));

        const liShips = document.createElement('li');
        liShips.classList.add('ships-to');
        const subSubUl = document.createElement('ul');
        liShips.appendChild(subSubUl);
        subUl.appendChild(liShips);

        object.shipsTo.forEach(country => {
            const subSubLi = document.createElement('li');
            subSubLi.innerHTML = country;
            subSubUl.appendChild(subSubLi);
        });

        const listItem = document.createElement('li');
        const btnBuy = document.createElement('button');
        btnBuy.textContent = 'Buy';
        btnBuy.addEventListener('click', function () {
            buy(object);
        });
        listItem.appendChild(btnBuy);
        subUl.appendChild(listItem);
    });
}

function makeListItem(className, key) {
    const listItem = document.createElement('li');
    listItem.classList.add(className);
    listItem.innerHTML = key;
    return listItem;
}

renderProducts(products.sort((a, b) => (a.price > b.price ? 1 : -1)));

const searchInput = document.querySelector('.search > input');

searchInput.addEventListener('input', function () {
    productsSearch();
    if (!searchInput.value) {
        renderProducts(products);
    } else {
        renderProducts(searched);
    }
});

let searched = [];

function productsSearch() {
    searched = products.filter(product =>
        product.name
        .toLowerCase()
        .split(' ')
        .indexOf(searchInput.value.toLowerCase()) >= 0 ?
        true :
        false
    );
}

// Lets help a user to avoid spending too much time looking for products that can not be
// shipped to the user's country: When the user selects a country in the ships to select tag,
// the products should be updated with the products that ship to that country.

//TOLOWERCASE!!!!
const shipsToCountry = document.querySelector('.country > select');

let productsShipToCountry = [];

function productsSearchCountry() {
    if (shipsToCountry.value === "all") {
        productsShipToCountry = products;
    } else {
        productsShipToCountry = products.filter(product => {
            const country = product.shipsTo;
            const countryLower = country.map(c => c.toLowerCase());
            if (countryLower.indexOf(shipsToCountry.value) >= 0) {
                return true;
            }
        });
    }
    return productsShipToCountry;
}

shipsToCountry.addEventListener('change', function () {
    productsSearchCountry();
    renderProducts(productsShipToCountry);
});

// Create some extra feature
// No matter how small or how big. Create some feature that would be cool/helpful/quirky/funny.

const sortOption = document.querySelector('.sort > select');

sortOption.addEventListener('change', function () {
    let selection = sortOption.value;
    if (selection === 'name') {
        renderProducts(products.sort((a, b) => (a.name > b.name ? 1 : -1)));
    } else if (selection === 'cheap') {
        renderProducts(products.sort((a, b) => (a.price > b.price ? 1 : -1)));
    } else {
        renderProducts(products.sort((a, b) => (b.price > a.price ? 1 : -1)));
    }
});

// Shopping cart - optional
// When clicking the Add to cart button for a product,
// that product should be added to the ul found under the section with the classname cart.
// The product should be added as a an li item.
const prices = [];

function buy(product) {
    const cartUl = document.querySelector('.cart > ul');
    const listItem = document.createElement('li');
    const subUl = document.createElement('ul');
    cartUl.appendChild(listItem);
    listItem.appendChild(subUl);
    const liName = document.createElement('li');
    liName.innerHTML = product.name;
    const liPrice = document.createElement('li');
    liPrice.classList.add('price-product');
    liPrice.innerHTML = product.price;
    subUl.appendChild(liName);
    subUl.appendChild(liPrice);

    prices.push(product.price);
    const total = prices.reduce((price, acc) => (acc += price), 0);

    const totalCart = document.querySelector('.cart > .total > p > span');
    totalCart.innerHTML = total;
}

// In order to analyse the product prices we need to send the prices of the products to a server.
const allPrices = products.map(product => product.price);

const callback = (response) => {
    console.log(response);
};

sendPricesToServer(allPrices, callback);

