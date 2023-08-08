document.addEventListener('DOMContentLoaded', function() {
    const cartButton = document.getElementById('cart-button');
    const closeCartButton = document.getElementById('close-cart-button');
    const cartOverlay = document.getElementById('cart-overlay');

    cartButton.addEventListener('click', () => {
        cartOverlay.style.display = 'flex';
    });

    closeCartButton.addEventListener('click', () => {
        cartOverlay.style.display = 'none';
    });

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    let total = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.parentNode;
            const productName = product.querySelector('h2').textContent;
            const productPrice = parseFloat(product.querySelector('p').textContent.replace('$', ''));

            const cartItem = document.createElement('li');
            cartItem.innerHTML = `
                <span>${productName}</span>
                <span>$${productPrice.toFixed(2)}</span>
            `;
            cartItems.appendChild(cartItem);

            total += productPrice;
            cartTotal.textContent = `$${total.toFixed(2)}`;
        });
    });
});
