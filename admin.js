$(document).ready(function () {
  // Sample product data
  var products = [
    { id: 1, name: "Product 1", price: 19.99, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 2, name: "Product 2", price: 29.99, description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 3, name: "Product 3", price: 39.99, description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }
  ];

  // Display products in the admin panel
  var productList = $("#product-list");
  products.forEach(function (product) {
    var card = `<div class="col-md-4">
                      <div class="card">
                          <div class="card-body">
                              <h5 class="card-title">${product.name}</h5>
                              <p class="card-text">$${product.price}</p>
                              <p class="card-text">${product.description}</p>
                              <button class="btn btn-primary edit-product" data-id="${product.id}">Edit</button>
                              <button class="btn btn-danger delete-product" data-id="${product.id}">Delete</button>
                          </div>
                      </div>
                  </div>`;
    productList.append(card);
  });

  // Add product button click event
  $("#add-product").click(function () {
    $("#product-modal").modal("show");
    $("#product-modal .modal-title").text("Add Product");
    $("#product-form").trigger("reset");
  });

  // Edit product button click event
  $(".edit-product").click(function () {
    var productId = $(this).data("id");
    var product = products.find(p => p.id === productId);
    $("#product-modal").modal("show");
    $("#product-modal .modal-title").text("Edit Product");
    $("#product-name").val(product.name);
    $("#product-price").val(product.price);
    $("#product-description").val(product.description);
  });

  // Delete product button click event
  $(".delete-product").click(function () {
    var productId = $(this).data("id");
    products = products.filter(p => p.id !== productId);
    updateProductList();
  });

  // Product form submission
  $("#product-form").submit(function (event) {
    event.preventDefault();
    var productName = $("#product-name").val();
    var productPrice = $("#product-price").val();
    var productDescription = $("#product-description").val();
    var productId = products.length + 1;
    var newProduct = { id: productId, name: productName, price: parseFloat(productPrice), description: productDescription };
    products.push(newProduct);
    $("#product-modal").modal("hide");
    updateProductList();
  });

  // Update product list after CRUD operations
  function updateProductList() {
    productList.empty();
    products.forEach(function (product) {
      var card = `<div class="col-md-4">
                          <div class="card">
                              <div class="card-body">
                                  <h5 class="card-title">${product.name}</h5>
                                  <p class="card-text">$${product.price}</p>
                                  <p class="card-text">${product.description}</p>
                                  <button class="btn btn-primary edit-product" data-id="${product.id}">Edit</button>
                                  <button class="btn btn-danger delete-product" data-id="${product.id}">Delete</button>
                              </div>
                          </div>
                      </div>`;
      productList.append(card);
    });
  }
});
