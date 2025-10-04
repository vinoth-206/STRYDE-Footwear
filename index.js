document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // 1. Mobile Navigation Toggle
    // ----------------------------------------------------
    const burger = document.getElementById('burger');
    const nav = document.getElementById('navLinks');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger) {
        burger.addEventListener('click', () => {
            // Toggle Nav and Burger Animation (Mobile view)
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
            
            // Note: The related CSS for .nav-active, .toggle, and @keyframes navLinkFade
            // must be present in your style.css media query block for this to work.
        });
    }

    // ----------------------------------------------------
    // 2. Enhanced "Add to Cart" Functionality
    // ----------------------------------------------------
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCountElement = document.getElementById('cartCount');
    let cartItemCount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-name');
            cartItemCount++;
            cartCountElement.textContent = cartItemCount;

            // Professional User Feedback
            button.textContent = 'Added to Cart!';
            button.disabled = true;
            button.style.backgroundColor = 'green';
            button.style.color = 'white';

            setTimeout(() => {
                button.textContent = 'Add to Cart';
                button.disabled = false;
                button.style.backgroundColor = ''; // Revert to CSS default
                button.style.color = '';
            }, 1000);
            
            console.log(`${productName} added. Total: ${cartItemCount}`);
        });
    });
});