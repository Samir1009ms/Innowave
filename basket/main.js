
const data = [
    {
        id: 1,
        name: "Ipone 12",
        price: 1200,
        category: "phone",
        image: "https://qiymeti.net/wp-content/uploads/apple-iphone-12-qiymeti.jpg",
        count: 1
    },
    {
        id: 2,
        name: "Ipone 11",
        price: 1000,
        category: "phone",
        image: "https://qiymeti.net/wp-content/uploads/apple-iphone-11-qiymeti.jpg",
        count: 1
    },
    {
        id: 3,
        name: "Ipone 10",
        price: 800,
        category: "phone",
        image: "https://qiymeti.net/wp-content/uploads/apple-iphone-x-qiymeti.jpg",
        count: 1
    },
    {
        id: 4,
        name: "Ipone 8",
        price: 600,
        category: "phone",
        image: "https://qiymeti.net/wp-content/uploads/apple-iphone-8-qiymeti.jpg",
        count: 1
    },
    {
        id: 5,
        name: "Ipone 7",
        price: 400,
        category: "phone",
        image: "https://qiymeti.net/wp-content/uploads/apple-iphone-7-qiymeti.jpg",
        count: 1
    },
    {
        id: 6,
        name: "Ipone 6",
        price: 200,
        category: "phone",
        image: "https://qiymeti.net/wp-content/uploads/apple-iphone-6-qiymeti.jpg",
        count: 1
    }
]

const main = document.querySelector('.main');

function render(data) {
    main.innerHTML = "";
    data.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('product');
        div.innerHTML = `
        <img src="${item.image}" alt="${item.name}" style="width:250px;height:250px;">
        <h3>Model: ${item.name}</h3>
        <p>Price: ${item.price}</p>
        <button class="add-to-cart" data-id="${item.id}">Add to cart</button>
        `;
        main.appendChild(div);
    });
}

render(data);


const buttons = document.querySelectorAll('.add-to-cart');
function addToCart(id) {
    const item = data.find(product => product.id === id);
    let cart = localStorage.getItem('product');
    cart = cart ? JSON.parse(cart) : [];
    const itemInCart = cart.find(product => product.id === id);
    if (itemInCart) {
        itemInCart.count++;
    } else {
        cart.push(item);
    }
    localStorage.setItem('product', JSON.stringify(cart));
}

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        addToCart(+id);
        renderCart();
        calculateTotalPrice();
    });
});

const cart = document.querySelector('.cart-items');

function renderCart() {
    cart.innerHTML = "";
    const cartData = JSON.parse(localStorage.getItem('product'));
    if (cartData) {
        cartData.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('product');
            div.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width:250px;height:250px;">
            <h3>Model: ${item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Count: ${item.count}</p>
            <p>Total Price: ${item.price * item.count}</p>
            <span style="font-size:20px; cursor:pointer;" class="increment" data-id="${item.id}">+</span>
            <span style="font-size:20px; cursor:pointer;" class="decrement" data-id="${item.id}">-</span>
            <button class="remove-from-cart" data-id="${item.id}">Remove from cart</button>
            `;
            cart.appendChild(div);
        });
    }
}

renderCart();

const totalPrice = document.querySelector('.total-price');
function calculateTotalPrice() {
    const cart = JSON.parse(localStorage.getItem('product'));
    if (cart) {
        const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);
        totalPrice.textContent = `Total price: ${total}`;
    }
}
calculateTotalPrice();

const cartDiv = document.querySelector('.cart-items');

cartDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-from-cart')) {
        const id = e.target.dataset.id;
        removeFromCart(+id);
        renderCart();
        calculateTotalPrice();
    }
});

function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem('product'));
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('product', JSON.stringify(cart));
}

cartDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('increment')) {
        const id = e.target.nextElementSibling.dataset.id;
        console.log(id);
        increment(id);
        renderCart();
        calculateTotalPrice();
    }
    if (e.target.classList.contains('decrement')) {
        const id = e.target.previousElementSibling.dataset.id;
        decrement(id);
        renderCart();
        calculateTotalPrice();
    }
});

function increment(id) {
    let cart = JSON.parse(localStorage.getItem('product'));
    const item = cart.find(product => product.id === +id);
    console.log(item);
    item.count++;
    localStorage.setItem('product', JSON.stringify(cart));
}

function decrement(id) {
    let cart = JSON.parse(localStorage.getItem('product'));
    const item = cart.find(product => product.id === +id);

    if (item.count > 1) {
        item.count--;
    } else {
        cart = cart.filter(product => product.id !== +id);
    }
    localStorage.setItem('product', JSON.stringify(cart));
}
