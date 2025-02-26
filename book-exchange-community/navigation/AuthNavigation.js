import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import LoginScreen from "../screens/auth/LoginScreen";
import RecoverPasswordScreen from "../screens/auth/RecoverPasswordScreen";
import WelcomeScreen from "../screens/auth/WelcomeScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";

const Stack = createStackNavigator();

export default function AuthNavigation() {
    return (
        <Stack.Navigator  initialRouteName="Welcome">
            <Stack.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ title: 'Iniciar Sesión'}}
            />
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{ title: 'Registrarse' }}
            />
            <Stack.Screen
                name="Recover"
                component={RecoverPasswordScreen}
                options={{ title: 'Recuperar Contraseña' }}
            />
        </Stack.Navigator>
    );
}

