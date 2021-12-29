$(document).ready(function () {
  var currentFloor = 2;
  var floorPath = $(".home-image path"); // each SVG floor
  var counterUp = $(".counter-up");
  var counterDown = $(".counter-down");

  var modal = $(".modal");
  var modalCloseButton = $(".modal-close-button");
  var viewFlatsButton = $(".view-flats");

  var flatPath = $(".flats path"); // each flat on the floor
  var listPath = $(".flat-list li");

  // mouse over flat function
  flatPath.on("mouseover", function () {
    var currentFlat = $(this).attr("data-flat");
    
    // поставить выделение правой секции для актовного элемента
    var selectedFlat = $(`[data-li=${currentFlat}]`);
    selectedFlat.toggleClass("current-flat");
  });

  //снять выделение с элемента списка
  flatPath.on("mouseout", function () {
    $(`[data-li]`).removeClass('current-flat');
  });

  // mouseover list elem function
  listPath.on("mouseover", function () {
    var currentListElem = $(this).attr("data-li");
    var selectedListElem = $(`[data-flat=${currentListElem}]`);
    selectedListElem.toggleClass("current-list-elem");
  });

  listPath.on("mouseout", function () {
    $(`[data-flat]`).removeClass('current-list-elem');
  });

  // mouse over floor function
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor"); // remove active class from floor
    currentFloor = $(this).attr("data-floor");
    changeCounter(currentFloor);
  });

  floorPath.on("click", toggleModal); //open the window on click on floor
  modalCloseButton.on("click", toggleModal); // close the window on click on close button
  viewFlatsButton.on("click", toggleModal);

  counterUp.on("click", function () {
    if (currentFloor < 18) {
      currentFloor++;
      // formatting currentFloor variable to get "01" instead of "1"
      changeCounter(currentFloor);

      floorPath.removeClass("current-floor"); // remove active class from floor
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // highlight current floor
    }
  });

  counterDown.on("click", function () {
    if (currentFloor > 2) {
      currentFloor--;
      changeCounter(currentFloor);

      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  })

  function toggleModal() { // function for opening / closing window
    modal.toggleClass("is-open");
  }

  function changeCounter(currentFloor) {
    usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    uCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 1, useGrouping: false});
    $(".counter").text(usCurrentFloor); // write attribute to floor counter
    $(".f-counter").text(uCurrentFloor);
  };
});