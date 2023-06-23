import { bibleAPI } from "./api";

var HTMLParser = require("fast-html-parser");

export function getBooks() {
  return bibleAPI.get("/books");
}

export function getChapters(book) {
  return bibleAPI.get(`/books/${book}/chapters`);
}

export async function getPassages(book, chapter) {
  book = book === null ? "MAT" : book;
  chapter = chapter === null ? 1 : chapter;

  const passageRequest = await bibleAPI.get(`/passages/${book}.${chapter}`);
  const passageResponse = HTMLParser.parse(passageRequest.data.data.content)
    .childNodes[0].childNodes;
  const formattedPassage = Object.values(passageResponse)
    .filter((item) => item.rawText.length > 3)
    .map((passage, index) => {
      return {
        id: index + 1,
        passage: passage.rawText,
      };
    });

  return formattedPassage;
}
