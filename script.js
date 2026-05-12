const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const quoteForm = document.querySelector("#quote-form");
const formMessage = document.querySelector("#form-message");
const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";

    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    siteNav.classList.toggle("is-open", !isOpen);
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth >= 1024) {
        return;
      }

      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open navigation");
      siteNav.classList.remove("is-open");
    });
  });
}

if (quoteForm && formMessage) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formMessage.textContent =
      "Thanks for reaching out. This form is a placeholder for now and does not send yet.";
  });
}
