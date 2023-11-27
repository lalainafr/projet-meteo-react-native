
import { StyleSheet, Text, View } from 'react-native';
import About from './components/About';
import Search from './components/Search';
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator tabBarPosition='bottom' style={{marginVertical: 30}}>
        <Drawer.Screen name='About' component={About} />
        <Drawer.Screen name='Search' component={Search} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}


