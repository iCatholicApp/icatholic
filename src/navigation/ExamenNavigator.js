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
                name="Daily Examen"
                component={DailyExamenScreen}
            />
            <ExamenStack.Screen
                name="Examen for Anyone"
                component={ExamenQuestionScreen}
            />
            {/* <ExamenStack.Screen
                name="Examen for Children"
                component={ExamenQuestionScreen}
            />
            <ExamenStack.Screen
                name="Examen for Young Adults"
                component={ExamenQuestionScreen}
            />
            <ExamenStack.Screen
                name="Examen for Married"
                component={ExamenQuestionScreen}
            /> */}
        </ExamenStack.Navigator>
    );
}
