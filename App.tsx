import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.greetings}>Hello Jason!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C6F1F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greetings: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});
