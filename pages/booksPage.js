import { getBooks, getBooksPopular } from "../services/books.service.js";
import { BookCard } from "../ui/books.js";
import { BooksList } from "../ui/books.js";
import { getFavorites } from "../services/favorites.service.js";

export async function renderBooks() {
  const books = await getBooks();
  const main = document.querySelector("#main");
  const favorites = getFavorites();
  main.innerHTML = BooksList(books.results, favorites);
}
export async function renderBooksPopular() {
  const books = await getBooksPopular();
  const main = document.querySelector("#main");
  const favorites = getFavorites();
  main.innerHTML = BooksList(books.results, favorites);
}
