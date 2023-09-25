import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Navigation from "./src/navigation";

// import * as SplashScreen from "expo-splash-screen";
// SplashScreen.preventAutoHideAsync();
// setTimeout(SplashScreen.hideAsync, 5000);

export default function App() {
  return (
    // add auth here eventually
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
}

// TODO: See what this does: Maybe we add universal padding and styling here
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC",
  },
});
