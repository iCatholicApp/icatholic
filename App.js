import AppNavigator from "./src/navigation/AppNavigator";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 5000);
export default function App() {
    return (
        // <View style={styles.container}>
        //     <Text>Open up App.js to start working on your app!</Text>>
        // </View>
        <AppNavigator />
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//         alignItems: "center",
//         justifyContent: "center",
//     },
// });
