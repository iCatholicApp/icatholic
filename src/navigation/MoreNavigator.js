import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  CreateNotificationScreen,
  NotificationScreen,
  MoreScreen,
  EditNotificationScreen,
} from "../screens";
import { Header } from "../components";

export default function MoreNavigator() {
  const MoreStack = createNativeStackNavigator();

  return (
    <MoreStack.Navigator
      screenOptions={{
        header: (props) => <Header props={props} />,
      }}
    >
      {/* <MoreStack.Screen name="More" component={MoreScreen} /> */}
      <MoreStack.Screen name="Notifications" component={NotificationScreen} />
      <MoreStack.Screen
        name="Create Notification"
        component={CreateNotificationScreen}
      />
      <MoreStack.Screen
        name="Edit Notification"
        component={EditNotificationScreen}
      />
    </MoreStack.Navigator>
  );
}
