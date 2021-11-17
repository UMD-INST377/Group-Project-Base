document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});



var app = new function() {
  this.el = document.getElementById('tasks');

  this.tasks = [];

  
  
  this.FetchAll = function() {
    var data = '';

    if (this.tasks.length > 0) {
      for (i = 0; i < this.tasks.length; i++) {
        data += '<tr>';
        data += '<td>'+(i+1)+". " + this.tasks[i] + '</td>';
        data += '<td><button onclick="app.Edit(' + i + ')"  class="btn btn-warning">Edit</button></td>';
        data += '<td><button onclick="app.Delete(' + i + ')"  class="btn btn-danger">Delete</button></td>';
        data += '</tr>';
      }
    }

    this.Count(this.tasks.length);
    return this.el.innerHTML = data;
  };

  this.Add = function () {
    el = document.getElementById('add-todo');
    // Get the value
    var task = el.value;

    if (task) {
      // Add the new value
      this.tasks.push(task.trim());
      // Reset input value
      el.value = '';
      // Dislay the new list
      this.FetchAll();
    }
  };
