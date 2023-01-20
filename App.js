import AppNavigator from "./src/navigation/AppNavigator";
import "react-native-gesture-handler";

// import * as SplashScreen from "expo-splash-screen";
// SplashScreen.preventAutoHideAsync();
// setTimeout(SplashScreen.hideAsync, 5000);

export default function App() {
    return (
        // add auth here eventually
        <AppNavigator />
    );
}
