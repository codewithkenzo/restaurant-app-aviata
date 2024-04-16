
console.log('hi');
let myBadge = document.querySelector('.cart-badge');
let myCart = document.querySelector('.cart-icon')

myCart.addEventListener("click", function() {
  myBadge.classList.add("active");
  console.log('active class added to status');
})

function checkIfActive() {
  if (myBadge.classList.contains("active")) {
    console.log("Class active has been added");
    // do something here if the class exists
  } else {
    console.log("Class active has not been added");
    // do something else here if the class does not exist
  }
}