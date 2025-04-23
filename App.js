import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./Navigation/MainStackNavigator";
import { UsersProvider } from "./context/UsersContext";
import { RoutinesProvider } from "./context/RoutinesContext";


export default function App() {
  return (
    
    <RoutinesProvider>
      <UsersProvider>
        <NavigationContainer>
          <SafeAreaView style={styles.container}>
            <MainStackNavigator />
          </SafeAreaView>
        </NavigationContainer>
      </UsersProvider>
    </RoutinesProvider>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
