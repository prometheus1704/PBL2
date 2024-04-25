window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var windowHeight = window.innerHeight; // Height of the viewport
    var documentHeight = document.documentElement.scrollHeight; // Total height of the document
    var scrollPercentage = (window.scrollY / (documentHeight - windowHeight)) * 100; // Calculate scroll percentage

    if (scrollPercentage > 4) { // Change the threshold to 20%
        navbar.style.backgroundColor = 'white';
        navbar.style.borderColor = 'black'; // Change border color to black
        navbar.querySelectorAll('a').forEach(function(anchor) {
            anchor.style.color = 'black';
        });
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.borderColor = 'transparent'; // Revert border color to transparent
        navbar.querySelectorAll('a').forEach(function(anchor) {
            anchor.style.color = '#fff';
        });
    }
});



// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.style.display === "block") {
          openDropdown.style.display = "none";
        }
      }
    }
  }
  
