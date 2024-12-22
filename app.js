// Sample product data
const products = [
    "Apple iPhone 14",
    "Samsung Galaxy S23",
    "OnePlus 11",
    "Google Pixel 8",
    "Sony WH-1000XM5 Headphones",
    "MacBook Air M2",
    "Dell XPS 15",
    "ali",
    "Lenovo ThinkPad X1",
    "Asus ROG Zephyrus",
    "HP Pavilion Gaming Laptop",
    "LG OLED Smart TV",
    "Samsung QLED 4K TV",
    "PlayStation 5",
    "Xbox Series X",
    "Nintendo Switch",
    "Bose QuietComfort Earbuds",
    "Canon EOS R5 Camera",
    "Nikon Z7 II",
    "GoPro HERO12",
    "Fitbit Charge 6"
];

// DOM elements
const searchBar = document.getElementById("searchBar");
const productList = document.getElementById("productList");

// Render all products initially
const renderProducts = (filter = "") => {
    productList.innerHTML = ""; // Clear current list
    const filteredProducts = products.filter(product =>
        product.toLowerCase().includes(filter.toLowerCase())
    );

    if (filteredProducts.length === 0) {
        productList.innerHTML = "<li>No products found.</li>";
    } else {
        filteredProducts.forEach(product => {
            const li = document.createElement("li");
            li.textContent = product;
            productList.appendChild(li);
        });
    }
};

// Event listener for search bar input
searchBar.addEventListener("input", (e) => {
    const searchValue = e.target.value;
    renderProducts(searchValue);
});

// Initial rendering
renderProducts();

