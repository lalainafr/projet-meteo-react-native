import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import About from './components/About';
import Search from './components/Search';

export default function App() {
  return (
    <View>
      <About />
      <Search />
    </View>
  );
}


