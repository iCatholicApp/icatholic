import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
    ExamenScreen,
    ExamenQuestionScreen,
    DailyExamenScreen,
} from "../screens";
import { Header } from "../components";

export default function ExamenNavigator() {
    const ExamenStack = createNativeStackNavigator();

    return (
        <ExamenStack.Navigator
            screenOptions={{
                header: (props) => <Header props={props} />,
            }}
        >
            <ExamenStack.Screen
                name="Examination of Conscience"
                component={ExamenScreen}
            />
            <ExamenStack.Screen
                name="Daily Examination"
                component={DailyExamenScreen}
            />
            <ExamenStack.Screen
                name="Examination"
                component={ExamenQuestionScreen}
            />
        </ExamenStack.Navigator>
    );
}
