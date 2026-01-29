import { getFavorites } from "../services/favorites.service.js";
import { getBook } from "../services/books.service.js";
import { BooksList } from "../ui/books.js";

export async function renderFavorites() {
  const main = document.querySelector("#main");
  main.dataset.page = "favorites";
  const favoriteIds = getFavorites();

  if (favoriteIds.length === 0) {
    main.innerHTML = `
      <h2 class="text-center text-xl text-[var(--color-action)]">
        No hay favoritos
      </h2>
    `;
    return;
  }

  const books = [];

  for (const id of favoriteIds) {
    const book = await getBook(id);
    books.push(book);
  }

  main.innerHTML = BooksList(books, favoriteIds);
}
