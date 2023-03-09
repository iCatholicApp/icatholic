import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  CreateReminderScreen,
  ReminderScreen,
  MoreScreen,
  EditReminderScreen,
  AboutScreen,
  BibleScreen,
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
      <MoreStack.Screen name="Other Features" component={MoreScreen} />
      <MoreStack.Screen name="Reminders" component={ReminderScreen} />
      <MoreStack.Screen
        name="Bible"
        component={BibleScreen}
        options={{ headerShown: false }}
      />
      <MoreStack.Screen
        name="Create Reminder"
        component={CreateReminderScreen}
      />
      <MoreStack.Screen name="Edit Reminder" component={EditReminderScreen} />
      <MoreStack.Screen name="About" component={AboutScreen} />
    </MoreStack.Navigator>
  );
}
