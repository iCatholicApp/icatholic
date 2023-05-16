import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  useWindowDimensions,
  SafeAreaView,
  View,
  Text,
  ScrollView,
} from "react-native";
import RenderHtml from "react-native-render-html";

import { DropDown, RoundButton } from "../components";
import colors from "../theme/colors";
import { getBooks, getChapters, getPassages } from "../helper/bible";

export default function BibleScreen() {
  const { width } = useWindowDimensions();

  const [currentPassage, setCurrentPassage] = useState("<p></p>");
  const [currentBook, setCurrentBook] = useState("MAT");
  const [currentChapter, setCurrentChapter] = useState(1);
  const [allChapters, setAllChapters] = useState([]);
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    getBooks().then(function (response) {
      const books = response.data.data.map((book) => ({
        label: book.name,
        value: book.id,
      }));
      setAllBooks(books);
    });
    getChapters(currentBook).then(function (response) {
      const chapters = response.data.data.map((chapters) => ({
        label: chapters.number,
        value: chapters.number,
      }));
      setAllChapters(chapters.slice(1));
    });
    getPassages(currentBook, currentChapter).then(function (response) {
      setCurrentPassage(response.data.data.content);
    });
  }, [currentBook, currentChapter]);

  return (
    <View style={styles.container}>
      <View style={styles.bibleHeader}>
        <DropDown
          width="43%"
          options={allBooks}
          placeholder="Matthew"
          onPress={(book) => setCurrentBook(book)}
          searchable
        />
        <DropDown
          width="25%"
          options={allChapters}
          placeholder="1"
          onPress={(chapter) => setCurrentChapter(chapter)}
        />
      </View>
      <ScrollView style={styles.passage}>
        {currentPassage && (
          <View style={{ marginBottom: 15, fontSize: 18 }}>
            <RenderHtml
              contentWidth={width}
              source={{ html: currentPassage }}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral200,
  },
  buttonStyle: {
    marginRight: 15,
  },
  passage: {
    padding: 15,
    // marginBottom: 15,
    fontSize: 18,
  },
  bibleHeader: {
    padding: 15,
    flexDirection: "row",
    zIndex: 1,
  },
  bookModal: {
    position: "absolute",
    margin: 15,
  },
});
