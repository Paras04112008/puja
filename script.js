document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (menu && nav) menu.addEventListener("click", () => nav.classList.toggle("open"));

  document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => nav?.classList.remove("open")));

  const params = new URLSearchParams(window.location.search);
  const service = params.get("service");
  const select = document.querySelector("#serviceSelect");
  if (service && select) {
    [...select.options].forEach(option => {
      if (option.text.toLowerCase() === service.toLowerCase()) select.value = option.text;
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
      window.scrollTo({top: message.getBoundingClientRect().top + window.scrollY - 130, behavior:"smooth"});
    });
  }

  document.querySelectorAll(".gallery-grid img").forEach(img => {
    img.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.className = "image-lightbox";
      overlay.innerHTML = `<div class="lightbox-inner"><button aria-label="Close">×</button><img src="${img.src}" alt="${img.alt}"></div>`;
      document.body.appendChild(overlay);
      overlay.addEventListener("click", e => { if (e.target === overlay || e.target.tagName === "BUTTON") overlay.remove(); });
    });
  });
});
const lightboxCSS = document.createElement("style");
lightboxCSS.textContent = `.image-lightbox{position:fixed;inset:0;background:rgba(20,8,3,.88);z-index:999;display:grid;place-items:center;padding:25px}.lightbox-inner{position:relative;max-width:950px;max-height:90vh}.lightbox-inner img{max-width:100%;max-height:85vh;display:block}.lightbox-inner button{position:absolute;right:-12px;top:-42px;background:none;border:0;color:white;font-size:35px;cursor:pointer}`;
document.head.appendChild(lightboxCSS);
