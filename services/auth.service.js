import { user } from "../data/data.js";

export function login(email, password) {
  if (email === user.email && password === user.password) {
    localStorage.setItem(
      "session",
      JSON.stringify({
        id: user.id,
        name: user.name,
        email: user.email,
        favorites: user.favorites,
      }),
    );
    return true;
  }

  return false;
}

export function isAuthenticated() {
  return Boolean(localStorage.getItem("session"));
}

export function logout() {
  localStorage.removeItem("session");
}
