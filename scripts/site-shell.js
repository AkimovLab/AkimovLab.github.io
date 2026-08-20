(function () {
  "use strict";

  const pages = [
    ["index.html", "Home"],
    ["research.html", "Research"],
    ["publications.html", "Publications"],
    ["group.html", "People"],
    ["group_alumni.html", "Alumni"],
    ["soft_and_tuts.html", "Software"],
    ["teaching.html", "Teaching"],
    ["outreach.html", "Outreach"],
    ["contact.html", "Contact"]
  ];

  const inSoftwareDirectory = window.location.pathname.indexOf("/soft_and_tuts/") !== -1;
  const rootPrefix = inSoftwareDirectory ? "../" : "";
  const currentPage = inSoftwareDirectory ? "soft_and_tuts.html" : (window.location.pathname.split("/").pop() || "index.html");
  const legacyNav = document.querySelector("body > nav.navbar");

  function navigation() {
    return pages.map(([href, label]) => {
      const current = href === currentPage ? ' aria-current="page"' : "";
      return `<a href="${rootPrefix}${href}"${current}>${label}</a>`;
    }).join("");
  }

  if (legacyNav) {
    document.body.classList.add("legacy-page");
    document.querySelectorAll('img[src$="Logo7.png"]').forEach(function (image) {
      const banner = image.closest(".row");
      if (banner) banner.remove();
    });

    const header = document.createElement("header");
    header.className = "site-header";
    header.innerHTML = `
      <div class="nav-shell">
        <a class="site-brand" href="${rootPrefix}index.html" aria-label="Akimov Research Group home">
          <span class="brand-mark" aria-hidden="true">AR</span>
          <span>Akimov Research Group<small>University at Buffalo</small></span>
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-navigation">Menu</button>
        <nav class="site-nav" id="site-navigation" aria-label="Primary navigation">${navigation()}</nav>
      </div>`;
    legacyNav.replaceWith(header);

    // StrapDown renders Markdown correctly, but also injects its own title bar.
    // Keep the rendered content and remove only that redundant generated bar.
    document.querySelectorAll("body > .navbar").forEach(function (bar) {
      bar.remove();
    });

    const footer = document.createElement("footer");
    footer.className = "site-footer";
    footer.innerHTML = `
      <div class="footer-grid">
        <div class="footer-identity">
          <a class="ub-lockup" href="https://www.buffalo.edu/" aria-label="University at Buffalo">
            <img src="${rootPrefix}images/ub-master-lockup.png" alt="University at Buffalo">
          </a>
          <div><strong>Akimov Research Group</strong><br>Theoretical and Computational Quantum Dynamics<br>Department of Chemistry · Buffalo, New York 14260, USA</div>
        </div>
        <div class="footer-links">
          <a href="${rootPrefix}contact.html">Contact</a>
          <a href="https://github.com/AkimovLab">GitHub</a>
          <a href="https://scholar.google.com/citations?user=ntSw8_cAAAAJ">Google Scholar</a>
        </div>
      </div>
      <div class="ai-credit">Site design and modernization developed with assistance from OpenAI Codex, an AI coding agent; scientific content maintained by the Akimov Research Group.</div>`;
    document.body.appendChild(footer);
  }

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }
}());
