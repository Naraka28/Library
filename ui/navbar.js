import { logout } from "../services/auth.service.js";
import { renderLogin } from "../pages/loginPage.js";
import { renderFavorites } from "../pages/favoritePage.js";
import { renderBooks, renderBooksPopular } from "../pages/booksPage.js";

export function renderNavbar() {
  const nav = document.querySelector("nav");
  nav.className = "bg-[var(--color-action)] px-6 py-4 shadow-md";
  const session = JSON.parse(localStorage.getItem("session"));

  nav.innerHTML = `
  <div class="max-w-7xl mx-auto flex items-center justify-between gap-6">
        <h1 class="text-xl font-semibold text-[var(--color-text-soft)]">
          Booktique
        </h1>

        <ul
          class="hidden md:flex items-center gap-6 text-[var(--color-text-soft)] font-medium"
        >
          <li class="cursor-pointer hover:underline">Home</li>
          <li class="cursor-pointer hover:underline">Favorites</li>
          <li class="cursor-pointer hover:underline">Most Popular</li>
        </ul>

        <div class="flex items-center gap-2">

          <div class="flex items-center gap-4">
          <span class="text-sm text-[var(--color-text-soft)]">
            Hola, <strong>${session.name}</strong>
          </span>

          <button
            id="logout-btn"
            class="
              px-3
              py-1.5
              rounded-lg
              text-sm
              font-medium
              text-[var(--color-text-soft)]
              border
              border-[var(--color-text-soft)]
              hover:bg-[var(--color-action)]
              hover:text-white
              transition
            "
            aria-label="Cerrar sesión"
          >
            Logout
          </button>
        </div>
        </div>
      </div>
  `;

  document.getElementById("logout-btn").addEventListener("click", () => {
    logout();
    nav.innerHTML = "";
    nav.className = "";
    renderLogin();
  });

  document.querySelectorAll("li")[1].addEventListener("click", () => {
    renderFavorites();
  });
  document.querySelectorAll("li")[0].addEventListener("click", () => {
    const main = document.querySelector("#main");
    main.dataset.page = "";
    renderBooks();
  });
  document.querySelectorAll("li")[2].addEventListener("click", () => {
    const main = document.querySelector("#main");
    main.dataset.page = "popular";
    renderBooksPopular();
  });
}
