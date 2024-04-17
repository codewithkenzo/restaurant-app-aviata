
console.log('hi');
let myBadge = document.querySelector('.cart-badge');
let myCart = document.querySelector('.cart-icon');
let bookingContainer = document.querySelector('.booking-container');
let displayBooking = 0;

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

function toggleBooking() {
  if (displayBooking == 0) {
    bookingContainer.classList.add('active')
    console.log("display set to on");
    displayBooking = 1
  } else {
    bookingContainer.classList.remove('active')
    console.log("display set to off");
    displayBooking = 0
  }
}
