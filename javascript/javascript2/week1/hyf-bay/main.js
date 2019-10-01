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
    ul.appendChild(li);
    array.forEach((object) => {

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

        object.shipsTo.forEach((country) => {
            const subSubLi = document.createElement('li');
            subSubLi.innerHTML = country;
            subSubUl.appendChild(subSubLi);
        })
    });
}

function makeListItem(className, key) {
    const listItem = document.createElement('li');
    listItem.classList.add(className);
    listItem.innerHTML = key;
    return listItem;
}

// const testProductNames = ['Flat screen', 'Mobile phone', 'Wallet'];
renderProducts(products);
// Should add 3 li's to the ul under the products section with Flat screen, Mobile phone, Wallet text