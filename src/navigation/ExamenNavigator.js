import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ExamenScreen, ExamenQuestionScreen } from "../screens";

export default function ExamenNavigator() {
    const ExamenStack = createNativeStackNavigator();

    return (
        <ExamenStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <ExamenStack.Screen name="Examen Page" component={ExamenScreen} />
            <ExamenStack.Screen
                name="Examination"
                component={ExamenQuestionScreen}
            />
        </ExamenStack.Navigator>
    );
}
