// WhatsApp Floating Button
document.addEventListener("DOMContentLoaded", function () {
  var phone = "919159593539";
  var message = "Hello! I would like to know more.";

  /* Create button */
  var waBtn = document.createElement("a");
  waBtn.href = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
  waBtn.target = "_blank";
  waBtn.rel = "noopener noreferrer";
  waBtn.setAttribute("aria-label", "Chat on WhatsApp");
  waBtn.className = "whatsapp-float";

  waBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill="#fff" d="M20.52 3.48A11.86 11.86 0 0012.03 0C5.39 0 .02 5.37 0 12c0 2.12.55 4.19 1.6 6.02L0 24l6.18-1.62a11.93 11.93 0 005.85 1.5h.01c6.63 0 12-5.37 12-12a11.9 11.9 0 00-3.52-8.4z"/>
    </svg>
  `;

  document.body.appendChild(waBtn);

  /* Inject CSS */
  var style = document.createElement("style");
  style.innerHTML = `
    .whatsapp-float {
      position: fixed;
      right: 10px;
      width: 56px;
      height: 56px;
      background-color: #25D366;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
      z-index: 9999;
      cursor: pointer;
      transition: transform 0.3s ease;
    }

    .whatsapp-float svg {
      width: 30px;
      height: 30px;
    }

    .whatsapp-float:hover {
      transform: scale(1.08);
    }
  `;
  document.head.appendChild(style);

  /* REAL responsive positioning */
  function setPosition() {
    const vh = window.innerHeight;

    // place button at 18% of screen height from bottom
    waBtn.style.bottom = Math.max(vh * 0.11, 80) + "px";
  }

  setPosition();
  window.addEventListener("resize", setPosition);
});