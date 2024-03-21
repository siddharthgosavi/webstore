$(document).ready(function () {
  // Sample product data
  var products = [
    { id: 1, name: "Product 4", price: 100.99 },
    { id: 2, name: "Product 2", price: 29.99 },
    { id: 3, name: "Product 3", price: 39.99 }
  ];

  // Display products on the Products page
  var productList = $("#product-list");
  products.forEach(function (product) {
    var card = `<div class="col-md-4">
                      <div class="card">
                          <img src="product${product.id}.jpg" class="card-img-top" alt="${product.name}">
                          <div class="card-body">
                              <h5 class="card-title">${product.name}</h5>
                              <p class="card-text">$${product.price}</p>
                              <button class="btn btn-primary btn-block add-to-cart" data-id="${product.id}">Add to Cart</button>
                          </div>
                      </div>
                  </div>`;
    productList.append(card);
  });

  // Add to cart functionality
  var cartItems = [];
  $(".add-to-cart").click(function () {
    var productId = $(this).data("id");
    var product = products.find(p => p.id === productId);
    cartItems.push(product);
    updateCart();
  });

  // Update cart and display cart items on the Cart page
  function updateCart() {
    var cartList = $("#cart-items");
    cartList.empty();
    cartItems.forEach(function (item) {
      var cartItem = `<div class="col-md-4">
                              <div class="card">
                                  <div class="card-body">
                                      <h5 class="card-title">${item.name}</h5>
                                      <p class="card-text">$${item.price}</p>
                                  </div>
                              </div>
                          </div>`;
      cartList.append(cartItem);
    });
  }
});
