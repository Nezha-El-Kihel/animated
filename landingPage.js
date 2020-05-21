// Get all a with class="btn" inside the container
var a_active = document.getElementsByClassName("liActive");
// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < a_active.length; i++) {
  a_active[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
