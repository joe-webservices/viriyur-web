class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <header>
                <div class="announcement-bar">
                    <p>Viriyur Village - Experience the heart of Tamil culture!</p>
                    <button class="close-announcement">&times;</button>
                </div>
                <nav class="navbar">
                    <div class="nav-container">
                        <div class="nav-left">
                            <div class="logo">
                                <h1>Viriyur</h1>
                            </div>
                            <ul class="nav-links">
                                <li><a href="index.html" data-i18n="nav.home">Home</a></li>
                                <li class="dropdown">
                                    <a href="about.html" data-i18n="nav.about">About</a>
                                </li>
                                <li><a href="gallery.html" data-i18n="nav.gallery">Gallery</a></li>
                                <li><a href="events.html" data-i18n="nav.events">Events</a></li>
                                <li><a href="contact.html" data-i18n="nav.contact">Contact</a></li>
                            </ul>
                        </div>
                        <div class="nav-right">
                            <div class="language-toggle">
                                <button id="langBtn" class="lang-btn">தமிழ்</button>
                            </div>
                            <div class="hamburger">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        `;

    // Add active class to current page
    const currentPage =
      window.location.pathname.split("/").pop() || "index.html";
    this.querySelector(`a[href="${currentPage}"]`)?.classList.add("active");

    // Handle announcement bar close
    const announcementBar = this.querySelector(".announcement-bar");
    const closeButton = this.querySelector(".close-announcement");

    if (closeButton && announcementBar) {
      closeButton.addEventListener("click", () => {
        announcementBar.style.display = "none";
        // Save preference in localStorage
        localStorage.setItem("announcementClosed", "true");
      });

      // Check if announcement was previously closed
      if (localStorage.getItem("announcementClosed") === "true") {
        announcementBar.style.display = "none";
      }
    }

    // Handle mobile menu
    const hamburger = this.querySelector(".hamburger");
    const navLinks = this.querySelector(".nav-links");

    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");
      });
    }
  }
}

customElements.define("header-component", Header);
