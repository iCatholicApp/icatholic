import React, { Fragment, useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native";
import * as Linking from "expo-linking";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import colors from "../theme/colors";
import TabNavigator from "./TabNavigator";

const prefix = Linking.createURL("/");

export default function AppNavigator() {
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
      <SafeAreaView style={{ flex: 0, backgroundColor: colors.neutral95 }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
        <NavigationContainer linking={linking}>
          <StatusBar style="auto" />
          <TabNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </Fragment>
  );
}

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
    alert("Must use physical device for Push Notifications");
  }

  return token;
}
