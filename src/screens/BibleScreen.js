import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { DropDown } from "../components";
import { getBooks, getChapters, getPassages } from "../helper/bible";
import colors from "../theme/colors";

export default function BibleScreen() {
  const [loaded, setLoaded] = useState(false);
  const [openBooks, setOpenBooks] = useState(false);
  const [openChapter, setOpenChapter] = useState(false);
  const [currentPassage, setCurrentPassage] = useState("<p></p>");
  const [currentBook, setCurrentBook] = useState("MAT");
  const [currentChapter, setCurrentChapter] = useState(1);
  const [allChapters, setAllChapters] = useState([]);
  const [allBooks, setAllBooks] = useState([]);

  const fetchPassage = async () => {
    setLoaded(false);
    Promise.all([
      getBooks(),
      getChapters(currentBook),
      getPassages(currentBook, currentChapter),
    ])
      .then(function (responses) {
        return Promise.all(
          responses.map(function (response) {
            return response;
          })
        );
      })
      .then(function (data) {
        const books = data[0].data.data.map((book) => ({
          label: book.name,
          value: book.id,
        }));

        const chapters = data[1].data.data.map((chapters) => ({
          label: chapters.number,
          value: chapters.number,
        }));

        const passage = data[2];

        setAllBooks(books);
        setAllChapters(chapters.slice(1));
        setCurrentPassage(passage);
        setLoaded(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchPassage();
  }, [currentBook, currentChapter]);

  return (
    <View style={styles.container}>
      <View style={styles.bibleHeader}>
        <DropDown
          width="50%"
          options={allBooks}
          placeholder="Matthew"
          value={currentBook}
          setValue={setCurrentBook}
          open={openBooks}
          setOpen={() => {
            setOpenBooks(!openBooks);
            setOpenChapter(false);
          }}
          onPress={(book) => {
            setCurrentBook(book);
            setCurrentChapter(1);
          }}
          searchable
        />
        <DropDown
          width="20%"
          options={allChapters}
          value={currentChapter}
          setValue={setCurrentChapter}
          open={openChapter}
          setOpen={() => {
            setOpenChapter(!openChapter);
            setOpenBooks(false);
          }}
          placeholder="1"
          onPress={(chapter) => {
            setCurrentChapter(chapter);
          }}
        />
      </View>
      <ScrollView
        style={styles.passageContainer}
        scrollEventThrottle={5000}
        onScroll={() => {
          if (openBooks || openChapter) {
            setOpenBooks(false);
            setOpenChapter(false);
          }
        }}
      >
        {currentPassage && loaded ? (
          <Text style={styles.passageText}>
            {currentPassage.map((passage) => (
              <Text key={passage.id}>
                <Text style={styles.verseText}>{passage.id}</Text>
                <Text style={styles.passageText}> {passage.passage}</Text>
              </Text>
            ))}
          </Text>
        ) : (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color={colors.neutral500} />
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
  passageContainer: {
    padding: 15,
  },
  verseText: {
    fontSize: 12,
    color: colors.neutral500,
  },
  passageText: {
    fontSize: 18,
    paddingBottom: 30,
    color: colors.neutral800,
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
