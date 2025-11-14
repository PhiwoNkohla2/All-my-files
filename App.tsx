import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// we don't use nativeStackNavigator here, because we are using bottom tab navigator moving between pages
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// for icons for our bottom tab navigator

// define what icons for our bottom tab navigator
import Ionions from "react-native-vector-icons";

// define what icons we want on our navigation bar
type RootTabParamList = {
  Home: undefined;
  SecondScreen: undefined;
};
// think of this like "Stack" from when we did StackNavigator
const Tab = createBottomTabNavigator<RootTabParamList>();

function HomeScreen () {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function SecondScreen () {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Second Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    // we still use NavContainer because we are still containing navigation objects
    <NavigationContainer>
      {/* this time we use Tab instead of Stack, because of our bottomTabNavigation (not using nativeStackNavigator) */}
      <Tab.Navigator
      /*screenOptions allows us to set up HOW to route between screens */
        screenOptions={({ route }) => ({
          /* here we are setting up how to handle changing the icon as we move between screens */
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string = "";

            if (route.name === "Home") {
              /*IF home is the selected (focused) screen, set the icon to 'home' (coloured in icon) 
              ELSE if it is not the selected one (: seperates if and else), set it to an outlined version 'home-outlined' */
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "SecondScreen") {
              iconName = focused ? "list" : "list-outline";
            }

            // You can return any component that you like here!
            return <Ionions name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false // this removes the header at the top of each screen
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="SecondScreen" component={SecondScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
