const mobileMenuBtn = document.querySelector(".mobile-menu-btn");

mobileMenuBtn.addEventListener("click", () => {
  // Implementing a simple mobile menu toggle
  const navLinks = document.querySelector(".nav-links");
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
    navLinks.style.position = "absolute";
    navLinks.style.flexDirection = "column";
    navLinks.style.backgroundColor = "white";
    navLinks.style.top = "70px";
    navLinks.style.left = "0";
    navLinks.style.right = "0";
    navLinks.style.padding = "20px";
    navLinks.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
    navLinks.style.zIndex = "100";
  }
});

window.addEventListener("resize", () => {
  const navLinks = document.querySelector(".nav-links");
  if (window.innerWidth > T68) {
    navLinks.style.display = "flex";
    navLinks.style.position = "static";
    navLinks.style.flexDirection = "row";
    navLinks.style.backgroundColor = "transparent";
    navLinks.style.padding = "0";
    navLinks.style.boxShadow = "none";
  } else {
    navLinks.style.display = "none";
  }
});

// FAQ section
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");
  const content = item.querySelector(".accordion-content");

  // Set initial state for active items
  if (item.classList.contains("active")) {
    content.style.maxHeight = content.scrollHeight + "px";
  }

  header.addEventListener("click", () => {
    // Toggle active class
    const isActive = item.classList.contains("active");

    // Close all accordion items
    accordionItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
        otherItem.querySelector(".accordion-content").style.maxHeight = null;
      }
    });

    // Toggle the clicked item
    if (isActive) {
      item.classList.remove("active");
      content.style.maxHeight = null;
    } else {
      item.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

window.addEventListener('resize', () => {
    accordionItems.forEach(item => {
        if (item.classList.contains('active')) {
            const content = item.querySelector('.accordion-content');
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});
