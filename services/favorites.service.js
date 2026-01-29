function getSession() {
  return JSON.parse(localStorage.getItem("session"));
}

function saveSession(session) {
  localStorage.setItem("session", JSON.stringify(session));
}

export function getFavorites() {
  const session = getSession();
  return session?.favorites || [];
}

export function setFavorite(id) {
  const session = getSession();
  if (!session) return;

  if (!session.favorites.includes(id)) {
    session.favorites.push(id);
    saveSession(session);
  }
}

export function removeFavorite(id) {
  const session = getSession();
  if (!session) return;

  session.favorites = session.favorites.filter((favId) => favId !== id);

  saveSession(session);
}

export function toggleFavorite(id) {
  const session = getSession();
  if (!session) return;

  if (session.favorites.includes(id)) {
    session.favorites = session.favorites.filter((favId) => favId !== id);
  } else {
    session.favorites.push(id);
  }

  saveSession(session);
}
