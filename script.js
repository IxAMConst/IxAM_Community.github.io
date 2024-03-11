/**
 * * important
 * ? maybes?
 * ! yikes
 * TODO:
 *  @param myparameter
 */
let mouseoverElement = document.getElementById("mouseOverChange");

if (mouseoverElement) {
  mouseoverElement.addEventListener("mouseover", function () {
    mouseoverElement.style.opacity = 1;
    console.log("enter");
  });

  mouseoverElement.addEventListener("mouseout", function () {
    mouseoverElement.style.opacity = 0;
    console.log("exit");
  });
} else {
  console.error("Element with ID 'mouseOver' not found.");
}
