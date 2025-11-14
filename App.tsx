import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homescreen from "./screens/HomeScreen";
import Secondscreen from "./screens/SecondScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons'

// create a list of params for our tabs
export type RootTabParamList = {
  Homescreen : undefined;
  Secondscreen : undefined;
};

// create our stack
const Stack = createBottomTabNavigator<RootTabParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
       initialRouteName='Homescreen'
       screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Homescreen') {
            iconName = focused? 'home' : 'home-outline';
          } else if (route.name === 'Secondscreen') {
            iconName = focused ? 'settings' : 'settings-outline';
          };
          return <Ionicons name={iconName} color={color} size={size} />;
          },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerTitleAlign: 'center',
        // tabBarStyle is like a StyleSheet for the tab bar, It is where you customize the CSS
        tabBarStyle: {
          backgroundColor: '#f9f9f9',
        },
        })}
        >
          <Stack.Screen 
          name="Homescreen" 
          component={Homescreen} 
          />
          <Stack.Screen 
          name="Secondscreen" 
          component={Secondscreen} 
          />

        </Stack.Navigator>
        </NavigationContainer>
  );
}
