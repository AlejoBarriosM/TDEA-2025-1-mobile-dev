import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./Navigation/MainStackNavigator";
import { UsersProvider } from "./context/UsersContext";

export default function App() {
  return (
    
  
    <UsersProvider>
      <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <MainStackNavigator />
      </SafeAreaView>
    </NavigationContainer>
    </UsersProvider>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
