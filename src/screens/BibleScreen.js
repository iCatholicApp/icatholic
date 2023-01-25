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

import { RoundButton } from "../components";
import colors from "../theme/colors";
import { getBooks, getChapters, getPassages } from "../helper/bible";

export default function BibleScreen() {
    const { width } = useWindowDimensions();

    const [loading, setLoading] = useState(true);
    const [currentPassage, setCurrentPassage] = useState([]);
    const [currentBook, setCurrentBook] = useState({
        id: "MAT",
        name: "Matthew",
    });
    const [currentChapter, setCurrentChapter] = useState(1);
    const [allChapters, setAllChapters] = useState([]);
    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        getBooks().then(function (response) {
            setAllBooks(response.data.data);
        });
        getChapters(currentBook.id).then(function (response) {
            setAllChapters(response.data.data);
        });
        getPassages(currentBook, currentChapter).then(function (response) {
            setCurrentPassage(response.data.data.content);
            setLoading(false);
        });
    }, [currentBook, currentChapter]);

    return (
        <View style={styles.container}>
            <View style={styles.bibleHeader}>
                <RoundButton
                    text="Matthew"
                    buttonStyle={styles.buttonStyle}
                    onPress={() => {}}
                />
                <RoundButton
                    text="1"
                    buttonStyle={styles.buttonStyle}
                    onPress={() => {}}
                />
            </View>
            <ScrollView style={styles.passage}>
                <RenderHtml
                    contentWidth={width}
                    source={{ html: currentPassage || "" }}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.neutral95,
    },
    buttonStyle: {
        marginRight: 10,
    },
    passage: {
        padding: 15,
        marginBottom: 15,
    },
    bibleHeader: {
        padding: 15,
        flexDirection: "row",
    },
});
