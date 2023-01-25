import axiosClient from "./api";

export function getBooks() {
    return axiosClient.get("/books");
}

export function getChapters(book) {
    return axiosClient.get(`/books/${book}/chapters`);
}

export function getPassages(book, chapter) {
    return axiosClient.get(`/passages/${book.id}.${chapter}`);
}
