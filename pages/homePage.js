import { logout } from "../services/auth.service.js";
import { renderNavbar } from "../ui/navbar.js";
import { renderBooks } from "./booksPage.js";
import { renderLogin } from "./loginPage.js";

export function renderHome() {
  renderNavbar();
  renderBooks();
}
