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
        gap-3
        transition
        hover:shadow-lg
      "
    >
      <figure
        class="
          w-full
          h-64
          overflow-hidden
          rounded-lg
          bg-[var(--color-bg-secondary)]
        "
      >
        <img
          src="${cover}"
          alt="Portada de ${book.title}"
          class="w-full h-full object-cover"
        />
      </figure>

      <h3
        class="
          text-lg
          font-semibold
          text-[var(--color-action)]
        "
      >
        ${book.title}
      </h3>

      <h4
        class="
          text-sm
          text-[var(--color-action)]
        "
      >
        Autor:
        <span class="font-medium">
          ${author}
        </span>
      </h4>

      <button
        class="
          mt-auto
          flex
          items-center
          gap-2
          text-sm
          font-medium
          text-[var(--color-action)]
          hover:scale-105
          transition
          fav-btn
        "
        data-id="${book.id}"
        aria-label="Marcar como favorito"
      >
        <span class="text-xl">
          ${isFavorite ? "♥" : "♡"}
        </span>
        Favorito
      </button>
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
