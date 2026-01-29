import { login } from "../services/auth.service.js";
import { renderHome } from "./homePage.js";

export function renderLogin() {
  const main = document.getElementById("main");

  main.innerHTML = `
    <section class="min-h-screen flex items-center justify-center bg-[var(--color-bg-main)]">
      <div class="w-full max-w-md bg-white rounded-2xl shadow-lg px-8 py-10">
        
        <h2 class="text-3xl font-semibold text-center text-[var(--color-action)] mb-8">
          Bienvenido
        </h2>

        <form id="login-form" class="flex flex-col gap-6">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              class="px-4 py-3 rounded-lg border"
              placeholder="daniel@gmail.com"
              required
            />
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium">Password</label>
            <input
              type="password"
              id="password"
              class="px-4 py-3 rounded-lg border"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            class="mt-4 bg-[var(--color-action)] text-white py-3 rounded-lg text-lg font-medium"
          >
            Iniciar sesión
          </button>
        </form>

        <p
          id="error-msg"
          class="text-red-500 text-sm text-center mt-6 hidden"
        >
          Credenciales incorrectas
        </p>
      </div>
    </section>
  `;

  document.getElementById("login-form").addEventListener("submit", handleLogin);
}

function handleLogin(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const success = login(email, password);

  if (success) {
    renderHome();
  } else {
    document.getElementById("error-msg").classList.remove("hidden");
  }
}
