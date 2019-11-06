// Product represents products. ShoppingCart represents a shopping cart.

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    // Depending on the provided currency return the correct price for the product.
    convertToCurrency(currency) {
        if (currency) {
            if (currency === 'dollar') {
                const dollar = this.price * 0.15;
                return dollar;
            } else if (currency === 'euro') {
                const euro = this.price * 0.13;
                return euro;
            } else if (currency === 'dinar') {
                const dinar = this.price * 15.72;
                return dinar;
            } else return `No such currency`;
        }
    }
}

class ShoppingCart {
    constructor(products) {
        this.products = products;
    }
    
    addProduct(product) {
        // should add a product to the products array
        this.products.push(product);
    }

    removeProduct(product) {
        // should remove a product from the products array
        if (this.products.includes(product)) {
            const index = this.products.indexOf(product);  
            this.products.splice(index,1);
          }
    }

    searchProduct(productName) {
        // should return an array of product that match the productName parameter
        const searchedProducts = this.products.filter(product =>
            product.name.toLowerCase().split(' ').indexOf(productName.toLowerCase()) >= 0);
        return searchedProducts;
    }

    getTotal() {
        // should get the total price of the products in the shoppingcart
        const totalPrice = this.products
            .map(product => product.price)
            .reduce((sum, price) => sum + price, 0);
        return totalPrice;
    }

    renderProducts(data) {
        // should render the products to html. You decide what to show and how
        // Also render the username and the total price of the products in the shoppingcart
        const main = document.getElementById('main');
        
        const username = document.createElement('h2');
        username.innerHTML = data.username;
        main.appendChild(username);

        const total = document.createElement('h3');
        total.innerHTML = `Total price: ${this.getTotal()} kr`;
        main.appendChild(total);
        
        const ul = document.createElement('ul');
        main.appendChild(ul);
        this.products.forEach(product => {
            const li = document.createElement('li');
            li.innerHTML = `<span>${product.name}</span>: <span>${product.price} kr</span>`;
            ul.appendChild(li);
        });
        
    }

    getUser() {
        //  should return a promise with the data from this api: 
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            //.then(data => console.log(data))
            .then(data => this.renderProducts(data))
            .catch(err => console.log(err));
    }

}

const flatscreen = new Product('flat-screen', 5000);
const tv = new Product('Samsung TV', 3000);

const shoppingCart = new ShoppingCart([flatscreen, tv]);

shoppingCart.getUser();
//shoppingCart.renderProducts();

document.querySelector('button').addEventListener('click', () => {
    const input = document.getElementById('search');
    if (input.value) {
        const productName = input.value;
        

        const divSearch = document.getElementById("search-results");
        const ulSearch = document.createElement('ul');
        divSearch.appendChild(ulSearch);
        shoppingCart.searchProduct(productName).forEach(product => {
            const liSearch = document.createElement('li');
            liSearch.innerHTML = `<span>${product.name}</span>: <span>${product.price} kr</span>`;
            ulSearch.appendChild(liSearch);
        });
        
        
    }
});


// Assuming dkr as default currency
const plant = new Product('plant', 50);
console.log(plant.convertToCurrency('dollar')); // 7.5
console.log(plant.convertToCurrency('euro')); // 6.5
console.log(plant.convertToCurrency('dinar')); // 786,10
console.log(plant.convertToCurrency('bla')); // No such currency