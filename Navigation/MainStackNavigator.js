
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "../components/TabNavigator"; 
import LoginScreen from "../screens/Authentication/LoginScreen";
import RegisterScreen from "../screens/Authentication/RegisterScreen";
import ExploreScreen from "../screens/Workout/subscreens/ExploreScreen";
import WorkoutScreen from "../screens/Workout/WorkoutScreen";



const AppStack = createStackNavigator();

function MainStackNavigator() {
    return (
        <AppStack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerShown: false, cardStyle: { backgroundColor: 'white' } }}>

            <AppStack.Screen name="TabHome" component={TabNavigator} />
            
            {/* Pantallas que no son parte de los tabs */}
            <AppStack.Screen name="LoginScreen" component={LoginScreen} />
            <AppStack.Screen name="RegisterScreen" component={RegisterScreen} />
            <AppStack.Screen name="ExploreScreen" component={ExploreScreen} />
            
            {/* También puedes mantener referencias directas a pantallas del tab
                si necesitas acceder a ellas desde el stack */}
            
            <AppStack.Screen name="WorkoutScreen" component={WorkoutScreen} />
            
        </AppStack.Navigator>
    )
}

export default MainStackNavigator;