// Write your code here
const products = ["Laptop", "Phone", "Headphones", "Monitor"];
function logFirstProduct() {
  console.log(products[0]);
}
function addProduct(Tablet) {
  products.push("Tablet");
  console.log(Tablet);
}

function updateProductName(Smartphone) {
  products[1] = "Smartphone"
  console.log(Smartphone);
  }

function removeLastProduct(Monitor) {
  products.pop(Monitor);
  console.log(Monitor);
  }



// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
