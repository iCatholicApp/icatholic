import { bibleAPI } from "./api";

export function getBooks() {
  return bibleAPI.get("/books");
}

export function getChapters(book) {
  return bibleAPI.get(`/books/${book}/chapters`);
}

export function getPassages(book, chapter) {
  book = book === null ? "MAT" : book;
  chapter = chapter === null ? 1 : chapter;
  return bibleAPI.get(`/passages/${book}.${chapter}`);
}
