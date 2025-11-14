import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  // new variable to hold what day of the week it is
  const [dayOfWeek, setDayOfWeek] = useState('');
  const [outputString, setOutputString] = useState('')

  return (
    <View style={styles.container}>
      <Text>Day of the Week Calculator</Text>
      {/* prompting the user to enter which day of the week it is */}
      <TextInput placeholder='What day of the week is it?' onChangeText={(newText) => setDayOfWeek(newText)}/>
        {/* button to perform the calculation */}
        <Button title="Calculate" onPress={() => {switch (dayOfWeek) {
            case "monday":
              setOutputString("Monday is the first day of the work week!");
              break;
              case "tuesday":
              setOutputString("Tuesday is the second day of the work week!");
              break;
              case "wednesday":
              setOutputString("Wednesday is the third day of the work week!");
              break;
              case "thursday":
              setOutputString("Thursday is the second last day of the work week!");
              break;
              case "friday":
              setOutputString("Friday is the last day of the work week!");
              break;
              case "saturday":
              setOutputString("Saturday is the first day of the weekend!");
              break;
              case "sunday":
              setOutputString("You have to work tomorrow!");
              break;
              default:
              setOutputString("Invalid input");
              break;
          }
        }} />
        {/* displaying whatever we set the value of outputString to */}
        <Text>{outputString}</Text>
      <StatusBar style="auto" />
    </View>
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
