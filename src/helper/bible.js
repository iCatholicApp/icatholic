import axiosClient from "./api";

export function getBooks() {
    return axiosClient.get("/books");
}

export function getChapters(book) {
    return axiosClient.get(`/books/${book}/chapters`);
}

export function getPassages(book, chapter) {
    book = book === null ? "MAT" : book;
    chapter = chapter === null ? 1 : chapter;
    return axiosClient.get(`/passages/${book}.${chapter}`);
}
