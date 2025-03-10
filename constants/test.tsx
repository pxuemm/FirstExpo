import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyStyle from './style';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>✰ ℌ𝔢𝔩𝔩𝔬 ℜ𝔢𝔞𝔞𝔠𝔱 ❃</Text>
      <Text style={styles.text1}>#ITSAKHON</Text>
      <Text style={MyStyle.textTest}>Lorem ipsum dolor sit amet.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f40',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:"black",
    fontSize: 40,
  },
  text1:{
    marginTop:50,
    color:"white",
    fontSize: 60,
  },
});
