// Business Logic

function TotalOrder(phoneNumber, name) {
  this.phoneNumber = phoneNumber;
  this.name = name;
  this.pizzas = [];
  this.currentId = 0;
}

function Pizza(size) {
  this.size = size;
}

Pizza.prototype.getPrice = function() {
  let price = 0;
}

  if(this.size === "small") {
    price = 10;
  } else if (this.size === "medium") {
    price = 14;
  } else if (this.size === "large") {
    price = 18;
  } else if (this.size === "XL") {
    price = 22;
  } else if (this.size === "XXL") {
    price = 26;
  }

  console.log("price: " price);
    return price;
}


// User Interface Logic

$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();


      const orderName = $("#name").val();
      const phoneNumber = $("input#phone-number").val();
      console.log(orderName, phoneNumber);
      const order = new TotalOrder(orderName, phoneNumber);
      //console.log(totalOrder);
  });

});