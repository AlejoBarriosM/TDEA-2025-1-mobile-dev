import React from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./Navigation/MainStackNavigator";
import { UsersProvider } from "./context/UsersContext";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { CompletedExercisesProvider } from './screens/Workout/subscreens/Subscreensroutine/Session1';

const Stack = createStackNavigator();

const App = () => {
  return (
    <CompletedExercisesProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <UsersProvider>
          <NavigationContainer>
            <SafeAreaView style={styles.container}>
              <MainStackNavigator />
            </SafeAreaView>
          </NavigationContainer>
        </UsersProvider>
      </GestureHandlerRootView>
    </CompletedExercisesProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
