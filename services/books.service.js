const baseUrl = "https://gutendex.com/books";
export async function getBooks() {
  const response = await fetch(baseUrl);
  if (!response.ok) {
    console.error(response.statusText);
  }
  const data = await response.json();
  console.log(data);
  return data;
}

export async function getBook(id) {
  const response = await fetch(`${baseUrl}/${id}`);
  if (!response.ok) {
    console.error(response.statusText);
  }
  const data = await response.json();
  console.log(data);
  return data;
}
export async function searchBook(query) {
  const response = await fetch(`${baseUrl}?${query}`);
  if (!response.ok) {
    console.error(response.statusText);
  }
  const data = await response.json();
  console.log(data);
  return data;
}
