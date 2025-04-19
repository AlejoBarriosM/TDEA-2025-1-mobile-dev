//components/TabNavigator.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getAuth } from "firebase/auth";
import { app } from "../firebaseConfig";
// Importa tus pantallas
import HomeScreen from "../screens/Home/HomeScreen";
import WorkoutScreen from "../screens/Workout/WorkoutScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import RegisterScreen from "../screens/Authentication/RegisterScreen";
// Para iconos (opcional)
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const auth = getAuth(app);

function TabNavigator() {
  // Obtener el usuario actual
  const user = auth.currentUser;

  return (
    <Tab.Navigator
      style={{
        position: "absolute",
        bottom: 0,
      }}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "black", 
        },
        tabBarActiveTintColor: "#fff", 
        tabBarInactiveTintColor: "#fff", 
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={"#fff"} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Workout"
        component={WorkoutScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="fitness-outline" color={"#fff"} size={size} />
          ),
        }}
      />
      {/* Mostrar Profile o Register según el estado de autenticación */}
      {user && !user.isAnonymous ? (
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="person-circle-outline"
                color={"#fff"}
                size={size}
              />
            ),
          }}
        />
      ) : (
        <Tab.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="help-circle-outline" color={"#fff"} size={size} />
            ),
          }}
        />
      )}
    </Tab.Navigator>
  );
}

export default TabNavigator;
