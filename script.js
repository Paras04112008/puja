document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (menu && nav) {
    menu.addEventListener("click", () => nav.classList.toggle("open"));
  }

  document.querySelectorAll(".nav a").forEach((a) => {
    a.addEventListener("click", () => nav?.classList.remove("open"));
  });

  const params = new URLSearchParams(window.location.search);
  const service = params.get("service");
  const select = document.querySelector("#serviceSelect");

  if (service && select) {
    [...select.options].forEach((option) => {
      if (option.text.toLowerCase() === service.toLowerCase()) {
        select.value = option.text;
      }
    });
  }

  const form = document.querySelector("#bookingForm");
  const message = document.querySelector("#formMessage");

  if (form && message) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.elements.name.value.trim();
      message.textContent = `Thank you${name ? ", " + name : ""}! Your enquiry has been captured in this frontend demo. Neon/database submission will be connected in the next phase.`;
      message.style.display = "block";
      form.reset();

      window.scrollTo({
        top: message.getBoundingClientRect().top + window.scrollY - 130,
        behavior: "smooth"
      });
    });
  }
});
