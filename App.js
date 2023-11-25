
import { StyleSheet, Text, View } from 'react-native';
import About from './components/About';
import Search from './components/Search';
import {NavigationContainer} from "@react-navigation/native";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarPosition='bottom' style={{marginVertical: 30}}>
        <Tab.Screen name='About' component={About} />
        <Tab.Screen name='Search' component={Search} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}


