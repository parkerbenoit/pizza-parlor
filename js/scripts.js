// Business Logic

function TotalOrder(phoneNumber, name) {
  this.phoneNumber = phoneNumber;
  this.name = name;
  this.pizzas = [];
  this.currentId = 0;
}

TotalOrder.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}
TotalOrder.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

function Pizza(size) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.addToppings = function(topping) {
  this.toppings.push(topping);
}

Pizza.prototype.getPrice = function() {
  let price = 0;

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

  this.toppings.forEach(function() {
    price +=1;
  });

  console.log("price: ", price);
    return price;
}

TotalOrder.prototype.TotalPrice = function() {
  let totalPrice = 0;
  this.pizzas.forEach(function(pizza) {
    totalPrice += pizza.getPrice();
    this.totalPrice = totalPrice ;
  });
  return totalPrice;
}





$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();
    const size;
    //checkbox info
    $("input:checkbox[name=size]:checked").each(function() {
      const inputtedSize = $(this).val().split("-")[0];
      size = inputtedSize;
    });
  });

    const toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      let inputtedToppings = $(this).val();
      toppings.push(inputtedToppings);
    });



      const orderName = $("#name").val();
      const phoneNumber = $("input#phone-number").val();
      console.log(orderName, phoneNumber);
      const order = new TotalOrder(orderName, phoneNumber);
      


  });

});