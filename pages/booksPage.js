import { getBooks } from "../services/books.service.js";
import { BookCard } from "../ui/books.js";
import { BooksList } from "../ui/books.js";

export async function renderBooks() {
  const books = await getBooks();
  const main = document.querySelector("#main");
  main.innerHTML = BooksList(books.results, []);
}
