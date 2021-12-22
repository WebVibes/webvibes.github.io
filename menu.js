let width = window.innerWidth;
function showServicesDropdownMenu() {
  if (width >= 992) {
    document.getElementById("servicesMenuDropdown").classList.add("show");
    document.getElementById("servicesMenuItem").classList.add("menu-item-hover");
  }
}
function hideServicesDropdownMenu() {
  document.getElementById("servicesMenuDropdown").classList.remove("show");
  document.getElementById("servicesMenuItem").classList.remove("menu-item-hover");
}

var dropdown = document.getElementsByClassName("side-menu-item");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}