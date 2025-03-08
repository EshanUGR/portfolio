// Function to check window size and set the navbar display
console.log("hello");
// function checkWindowSize() {
//   const navbar = document.querySelector(".navbar");
//   console.log(navbar)
//   if (window.innerWidth > 768) {
//     navbar.style.display = "none"; // Hide navbar if screen width is greater than 768px
//   } else {
//     navbar.style.display = "block"; // Show navbar if screen width is 768px or less
//   }
// }

// Call the function initially

// Add event listener for window resize
// window.addEventListener("resize", checkWindowSize);

// Function to toggle the navbar
document.addEventListener("DOMContentLoaded", function () {
  // Function to toggle the navbar display
  function toggleNavbar() {
    const navbar = document.querySelector(".navbar"); // Select the navbar by class

    if (!navbar) {
      console.error("Navbar element not found");
      return;
    }

    if (navbar.style.display === "none" || navbar.style.display === "") {
      navbar.style.display = "block";
    } else {
      navbar.style.display = "none";
    }
  }

  // Add event listener for the menu icon click
  let menuIcon = document.querySelector("#menu-icon"); // Select the menu icon by ID
  if (menuIcon) {
    menuIcon.addEventListener("click", () => {
      menuIcon.classList.toggle("fa-times"); // Toggle the icon between fa-bars and fa-times
      toggleNavbar(); // Toggle the navbar display
    });
  } else {
    console.error("Menu icon element not found");
  }
});




// Validate form
function validateForm() {
  var fullName = document.getElementById("fullName").value.trim();
  var email = document.getElementById("email").value.trim();
  var mobileNumber = document.getElementById("mobileNumber").value.trim();
  var emailSubject = document.getElementById("emailSubject").value.trim();
  var message = document.getElementById("message").value.trim();

  if (
    fullName === "" ||
    email === "" ||
    mobileNumber === "" ||
    emailSubject === "" ||
    message === ""
  ) {
    alert("Please fill in all fields.");
    return false;
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  var mobileRegex = /^\d{10}$/;
  if (!mobileRegex.test(mobileNumber)) {
    alert("Please enter a 10-digit mobile number.");
    return false;
  }

  return true;
}

// Scroll section active link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // Sticky navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // Remove toggle icon and navbar
  menuIcon.classList.remove("fa-times");
  // If screen width is less than or equal to 768px, hide the navbar
  if (window.innerWidth <= 768) {
    navbar.style.display = "none";
  }
};

// Typed.js initialization
document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".multiple-text", {
    strings: [
      "FullStack Developer",
      "Frontend Developer",
      "Backend Developer",
      "Database Creator",
      "MernStack Developer"
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
});
