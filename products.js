document.addEventListener("DOMContentLoaded", function () {
  var productContainer = document.querySelector(".product-list");

  // Fetch the product data from the API
  fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Log the fetched data to the console

      var products = data.products; // Access the 'products' property within 'data'

      if (Array.isArray(products)) {
        // Update the link text with the number of products
        var productsLink = document.querySelector("nav ul li:nth-child(2) a");
        productsLink.innerHTML = `Products (${products.length})`;

        // Create HTML for each product
        var productsHTML = products
          .map((product) => {
            return `
              <div class="product">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <p>Price: $${product.price}</p>
                <p>Rating: ${product.rating}</p>
                <p>Stock: ${product.stock}</p>
                <p>Brand: ${product.brand}</p>
                <p>Category: ${product.category}</p>
                <img src="${product.thumbnail}" alt="Product Thumbnail">
                <!-- Include additional images as needed -->
                <!-- Example: <img src="${product.images[0]}" alt="Product Image 1"> -->
                <button>Add to Cart</button>
              </div>
            `;
          })
          .join("");

        // Insert the products HTML into the container
        productContainer.innerHTML = productsHTML;
      } else {
        console.log("Error: Invalid product data");
      }
    })
    .catch((error) => {
      console.log("Error fetching product data:", error);
    });
});
