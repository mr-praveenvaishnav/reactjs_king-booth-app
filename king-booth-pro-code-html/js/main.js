(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Sidebar Toggler
  $(".sidebar-toggler").click(function () {
    $(".sidebar, .content").toggleClass("open");
    return false;
  });
})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
  // SIDEBAR FUNCTIONALITY
  setupAccordionOne();

  // SIDEBAR DOPDOWN ICON CHANGING FUNCTIONALITY
  setupAccordionTwo();

  // HAMBURGER FUNTIONALITY
  setupSidebar();

  // DROPDOWN FOR ADD_PRODUCTS PAGE
  setupDropdownForAddProducts();
});

// SIDEBAR FUNCTIONALITY
function setupAccordionOne() {
  var flushCollapseOne = document.getElementById("flush-collapseOne");
  var spanDropdown = document.getElementById("span-dropdown");
  var chevron = document.getElementById("chevron");

  if (flushCollapseOne && spanDropdown && chevron) {
    flushCollapseOne.addEventListener("show.bs.collapse", function () {
      spanDropdown.style.backgroundColor = "var(--nav-secondary)";
      flushCollapseOne.classList.add("open-accordion-body");
      chevron.classList.remove("fa-chevron-right");
      chevron.classList.add("fa-chevron-down");
    });

    flushCollapseOne.addEventListener("hide.bs.collapse", function () {
      spanDropdown.style.backgroundColor = "";
      flushCollapseOne.classList.remove("open-accordion-body");
      chevron.classList.remove("fa-chevron-down");
      chevron.classList.add("fa-chevron-right");
    });
  }
}

// SIDEBAR DOPDOWN ICON CHANGING FUNCTIONALITY
function setupAccordionTwo() {
  var collapseOne = document.getElementById("collapseOne");
  var spanDropdown2 = document.querySelector(".span-dropdown2");
  var chevron2 = document.getElementById("chevron2");

  if (collapseOne && spanDropdown2 && chevron2) {
    collapseOne.addEventListener("show.bs.collapse", function () {
      spanDropdown2.style.backgroundColor = "var(--nav-secondary)";
      collapseOne.classList.add("open-accordion-body");
      chevron2.classList.remove("fa-chevron-right");
      chevron2.classList.add("fa-chevron-down");
    });

    collapseOne.addEventListener("hide.bs.collapse", function () {
      spanDropdown2.style.backgroundColor = "";
      collapseOne.classList.remove("open-accordion-body");
      chevron2.classList.remove("fa-chevron-down");
      chevron2.classList.add("fa-chevron-right");
    });
  }
}

// HAMBURGER FUNTIONALITY
function setupSidebar() {
  var hamButton = document.getElementById("ham");
  var crossButton = document.getElementById("cross");

  if (hamButton && crossButton) {
    hamButton.addEventListener("click", function () {
      document.getElementById("sidebar").classList.add("sidebar-shifted");
      document.getElementById("blur").style.display = "block";
    });

    crossButton.addEventListener("click", function () {
      document.getElementById("sidebar").classList.remove("sidebar-shifted");
      document.getElementById("blur").style.display = "none";
    });
  }
}

// DROPDOWN FOR ADD_PRODUCTS PAGE

function setupDropdownForAddProducts() {
  const accordionHeader = document.querySelector(".accordion-header");
  const selectedOption = document.querySelector(".selected-option");
  const accordionContent = document.querySelector(".accordion-content");
  const options = document.querySelectorAll(".option");

  // ICON CHANGING
  accordionHeader.addEventListener("click", () => {
    accordionHeader.classList.toggle("active");
    accordionContent.classList.toggle("active");

    const icon = accordionHeader.querySelector(".icon");

    if (icon.innerHTML.includes("fa-caret-down")) {
      icon.innerHTML = '<i class="fa-solid fa-caret-up"></i>';
      console.log("Accordion opened");
    } else {
      icon.innerHTML = '<i class="fa-solid fa-caret-down"></i>';
      console.log("Accordion closed");
    }
  });

  // ICON CHANGING BASED ON OPTIONS
  options.forEach((option) => {
    option.addEventListener("click", () => {
      selectedOption.textContent = option.textContent;
      accordionHeader.classList.remove("active");
      accordionContent.classList.remove("active");

      const icon = accordionHeader.querySelector(".icon");
      icon.innerHTML = '<i class="fa-solid fa-caret-down"></i>';
    });
  });

  // ACCORDION FUNCTIONALITY ( DROPDOWN )
  accordionContent.addEventListener("click", function (event) {
    const clickedElement = event.target;

    if (clickedElement.classList.contains("option")) {
      selectedOption.textContent = clickedElement.textContent;
      accordionHeader.classList.remove("active");
      accordionContent.classList.remove("active");
      const icon = accordionHeader.querySelector(".icon");
      icon.innerHTML = '<i class="fa-solid fa-caret-down"></i>';
    }
  });

  // ADD BUTTON CONVERION TO INPUT FIELD
  const addButton = document.getElementById("button");
  const inputWithButton = document.getElementById("input");

  addButton.addEventListener("click", function () {
    addButton.style.display = "none";
    inputWithButton.style.display = "block";
  });

  // NEW CATEGORY INPUT FIELD
  const createButton = document.getElementById("createButton");
  const newCategoryInput = document.querySelector(".input-with-button input");
  const accordionContent2 = document.querySelector(".accordion-content");
  const inputWithButton2 = document.getElementById("input");

  createButton.addEventListener("click", function () {
    const newCategoryText = newCategoryInput.value.trim();

    if (newCategoryText) {
      const newOption = document.createElement("div");
      newOption.classList.add("option");
      newOption.textContent = newCategoryText;
      accordionContent2.insertBefore(newOption, inputWithButton2);
      newCategoryInput.value = "";
    }
  });
}
