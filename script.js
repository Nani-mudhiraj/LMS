document.getElementById("popupButton").addEventListener("click", function() {
    var popupMenu = document.getElementById("popupMenu");
    if (popupMenu.style.display === "block") {
      popupMenu.style.display = "none";
    } else {
      popupMenu.style.display = "block";
    }
  });
  window.onclick = function(event) {
    var popupMenu = document.getElementById("popupMenu");
    if (event.target != popupMenu && event.target != document.getElementById("popupButton")) {
      popupMenu.style.display = "none";
    }
  }
    document.querySelectorAll('.menuItem').forEach(item => {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      var content = document.getElementById('content');
      content.innerHTML = '<h2>' + item.textContent + '</h2><p>' + item.getAttribute('data-details') + '</p>';
    });
  });