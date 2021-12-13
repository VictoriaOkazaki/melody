$(document).ready(function () {
  var currentFloor = 2;
  var floorPath = $(".home-image path"); // each SVG floor
  var counterUp = $(".counter-up");
  var counterDown = $(".counter-down");

  var modal = $(".modal");
  var modalCloseButton = $(".modal-close-button");
  var viewFlatsButton = $(".view-flats");

  // mouse over floor function
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor"); // remove active class from floor
    currentFloor = $(this).attr("data-floor"); // get current floor attribute
    $(".counter").text(currentFloor); // write attribute to floor counter
  });

  floorPath.on("click", toggleModal); //open the window on click on floor
  modalCloseButton.on("click", toggleModal); // close the window on click on close button
  viewFlatsButton.on("click", toggleModal);

  counterUp.on("click", function () {
    if (currentFloor < 18) {
      currentFloor++;
      // formatting currenFloor variable to get "01" instead of "1"
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
      $(".counter").text(usCurrentFloor); // write attribute to floor counter

      floorPath.removeClass("current-floor"); // remove active class from floor
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // highlight current floor
    }
  });

  counterDown.on("click", function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
      $(".counter").text(usCurrentFloor);

      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  })

  function toggleModal() { // function for opening / closing window
    modal.toggleClass("is-open");
  }
});