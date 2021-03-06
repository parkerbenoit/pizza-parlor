// Business Logic --------------------------------------------

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

// User Intergace ---------------------------------------

$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();
    let pizzaSize = [];
    $("input:checkbox[name=pizza-size]:checked").each(function() {
      const inputtedPizzaSize = $(this).val().split("-")[0];
      pizzaSize = inputtedPizzaSize;
    });
  //});

    let toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      let inputtedToppings = $(this).val();
      toppings.push(inputtedToppings);
    });


      const orderName = $("#name").val();
      const phoneNumber = $("input#phone-number").val();
      console.log(orderName, phoneNumber);
      const totalOrder = new TotalOrder(orderName, phoneNumber);
      
    let newPizza = new Pizza(pizzaSize);
      $("input:checkbox[name=toppings]:checked").each(function() {
        newPizza.addToppings($(this).val());
      });
      $(".name").append(" " + "<em>" + orderName + "</em>");
      $(".phone-number").append(phoneNumber);
      $(".size").append(" " + pizzaSize)
      totalOrder.addPizza(newPizza);
      $("#order-total").append("$" + totalOrder.TotalPrice());
      $("#order-summary").show(); //---------not showing right now?------- //
    console.log(totalOrder);

  });

});