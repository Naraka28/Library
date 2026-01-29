import { toggleFavorite } from "../services/favorites.service.js";
import { renderHome } from "../pages/homePage.js";
import { renderBooksPopular } from "../pages/booksPage.js";
import { getFavorites } from "../services/favorites.service.js";

export function BookCard(book, isFavorite = false) {
  const cover =
    book.formats?.["image/jpeg"] ||
    "https://via.placeholder.com/200x300?text=No+Cover";

  const author = book.authors?.[0]?.name || "Autor desconocido";

  return `
    <article
      class="
        bg-[var(--color-bg-secondary)]
        rounded-xl
        shadow-md
        p-4
        flex
        flex-col
        gap-4
        transition
        hover:shadow-lg
      "
    >
      <!-- Cover -->
      <figure
        class="
          w-full
          h-72
          rounded-lg
          bg-[var(--color-bg-main)]
          flex
          items-center
          justify-center
          overflow-hidden
        "
      >
        <img
          src="${cover}"
          alt="Portada de ${book.title}"
          class="max-h-full max-w-full object-contain"
        />
      </figure>

      <!-- Title -->
      <h3 class="text-lg font-semibold text-[var(--color-action)] line-clamp-2">
        ${book.title}
      </h3>

      <!-- Author -->
      <h4 class="text-sm text-[var(--color-action)]">
        Autor:
        <span class="font-medium">${author}</span>
      </h4>

      <!-- Footer -->
      <div class="mt-auto flex items-center justify-between">
        <button
          class="
            flex
            items-center
            gap-2
            text-sm
            font-medium
            text-[var(--color-action)]
            hover:scale-105
            transition
            fav-btn"
          data-id="${book.id}"
          aria-label="Marcar como favorito"
        >
          <span class="text-xl">
            ${isFavorite ? "♥" : "♡"}
          </span>
          Favorito
        </button>

        <span
          class="
            flex
            items-center
            gap-1
            text-xs
            font-medium
            px-2
            py-1
            rounded-full
            bg-[var(--color-bg-main)]
            text-[var(--color-action)]
          "
        >
          ⬇ ${book.download_count.toLocaleString()}
        </span>
      </div>
    </article>
  `;
}

export function BooksList(books, favorites) {
  return `
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      ${books
        .map((book) => BookCard(book, favorites.includes(book.id)))
        .join("")}
    </section>
  `;
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".fav-btn");
  if (!btn) return;

  const id = Number(btn.dataset.id);
  toggleFavorite(id);

  const favorites = getFavorites();
  const isFav = favorites.includes(id);

  btn.querySelector("span").textContent = isFav ? "♥" : "♡";

  const card = btn.closest("article");
  if (card && isFavoritesPage()) {
    card.remove();
  }
});

function isFavoritesPage() {
  const main = document.querySelector("#main");
  return main.dataset.page === "favorites";
}
