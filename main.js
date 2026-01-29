import { isAuthenticated } from "./services/auth.service.js";
import { renderLogin } from "./pages/loginPage.js";
import { renderHome } from "./pages/homePage.js";
import { renderBooks } from "./pages/booksPage.js";

if (isAuthenticated()) {
  renderHome();
} else {
  renderLogin();
}
