import React, { Fragment, useEffect, useRef, useState } from "react";

import { useColorScheme, SafeAreaView } from "react-native";
import * as Linking from "expo-linking";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import colors from "../theme/colors";
import TabNavigator from "./TabNavigator";

const prefix = Linking.createURL("/");

export default Navigation = () => {
  const scheme = useColorScheme();

  const MyTheme = {
    dark: false,
    colors: {
      primary: "rgb(255, 45, 85)",
      background: "rgb(242, 242, 242)",
      card: "rgb(255, 255, 255)",
      text: "rgb(28, 28, 30)",
      border: "rgb(199, 199, 204)",
      notification: "rgb(255, 69, 58)",
    },
  };

  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Prayers: {
          screens: {
            Prayer: "prayer",
          },
        },
        Examen: "examen",
      },
    },
  };

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <Fragment>
      {/* TOdo: see why i have two safeare views here; is it to match the bg colour or something? */}
      {/* todo: maybe we can export this safe area view stuff to App.js instead of navigation  */}
      <SafeAreaView style={{ flex: 0, backgroundColor: colors.neutral200 }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.neutral100 }}>
        <NavigationContainer
          linking={linking}
          theme={scheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <StatusBar style="auto" />
          <TabNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </Fragment>
  );
};

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    // alert("Must use physical device for Push Notifications");
  }

  return token;
}
