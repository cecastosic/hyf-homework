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
        
        const liName = document.createElement('li');
        liName.classList.add('name');
        liName.innerHTML = object.name;
        subUl.appendChild(liName);
        
        const liPrice = document.createElement('li');
        liPrice.classList.add('price');
        liPrice.innerHTML = object.price;
        subUl.appendChild(liPrice);
        
        const liRating = document.createElement('li');
        liRating.classList.add('rating');
        liRating.innerHTML = object.rating;
        subUl.appendChild(liRating);
        
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



// const testProductNames = ['Flat screen', 'Mobile phone', 'Wallet'];
renderProducts(products); 
// Should add 3 li's to the ul under the products section with Flat screen, Mobile phone, Wallet text

