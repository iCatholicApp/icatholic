import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ExamenScreen, ExamenQuestionScreen } from "../screens";
import { Header, IconButton } from "../components";
import { View, Text } from "react-native";
import { getHeaderTitle } from "@react-navigation/elements";

export default function ExamenNavigator() {
    const ExamenStack = createNativeStackNavigator();

    return (
        <ExamenStack.Navigator
            screenOptions={{
                header: (props) => <Header props={props} />,
            }}
        >
            <ExamenStack.Screen
                name="Examen Page"
                component={ExamenScreen}
                options={{}}
            />
            <ExamenStack.Screen
                name="Examination"
                component={ExamenQuestionScreen}
            />
        </ExamenStack.Navigator>
    );
}
