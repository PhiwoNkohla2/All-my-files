import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// to use this, we ran "npm install react-native-paper" without it, this won't work
import { RadioButton} from 'react-native-paper'; 

export default function App() {
  // creating a variable to store which of the radio buttons is currently selected (by default, 0, meaning none)
  const [selectedValue, setSelectedValue] = useState('0');
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      {/* this view sets up our radio container, it will hold all our radio objects */}
    <View style={styles.radioContainer}>
      <View style={styles.radioGroup}>
        <View style={styles.radioButton}>
          <RadioButton.Android
          value="1"
          // here we set whether the button shows the dot or not (whether its checked or not)
          // we use a 1 line if statement (first we specify what to check, followed by a ?)
          // then what to do if its true (set as checked),a :, then what to do if false (unchecked)
          status={selectedValue == '1' ? 'checked': 'unchecked'}
           // what to do when the radio button is pressed (updated the variable)
          onPress={() => setSelectedValue('1')} 
          // finally we set a colour
          color="#007bff"
          />
            {/* every button needs a corresponding label */}
            <Text style={styles.radioLabel}>Breakfast</Text>
        </View>
        <View style={styles.radioButton}>
          <RadioButton.Android
          value="2"
          // here we set whether the button shows the dot or not (whether its checked or not)
          // we use a 1 line if statement (first we specify what to check, followed by a ?)
          // then what to do if its true (set as checked),a :, then what to do if false (unchecked)
          status={selectedValue == '2' ? 'checked': 'unchecked'}
          // what to do when the radio button is pressed (updated the variable)
          onPress={() => setSelectedValue('2')} 
          // finally we set a colour
          color="#007bff"
          />
            {/* every button needs a corresponding label */}
            <Text style={styles.radioLabel}>Lunch</Text>
        </View>

         <View style={styles.radioButton}>
          <RadioButton.Android
          value="3"
          // here we set whether the button shows the dot or not (whether its checked or not)
          // we use a 1 line if statement (first we specify what to check, followed by a ?)
          // then what to do if its true (set as checked),a :, then what to do if false (unchecked)
          status={selectedValue == '3' ? 'checked': 'unchecked'}
           // what to do when the radio button is pressed (updated the variable)
          onPress={() => setSelectedValue('3')} 
          // finally we set a colour
          color="#007bff"
          />
            {/* every button needs a corresponding label */}
            <Text style={styles.radioLabel}>Dinner</Text>
        </View> {/* end of button */}
      </View>  {/* end of radioContainer */}
    </View>  {/* end of buton */}
    <Button title="Click me for a Recommendation!"
    onPress={() => { switch(selectedValue) {
      case '0':
        console.log('You did not select a button!')
        break;
        case '1':
        console.log('You should have a Monster(tm) energy drink for breakfast!')
        break;
        case '2':
          console.log('You should have an idiot sandwitch (and a Monster) for lunch!')
          break;
          case '3':
            console.log('You should have a braai (and hot chocolate) for dinner!')
    }}}/>
     </View>  // end of screen
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // this is the box that will contain our group of radio buttons
  radioContainer: {
    // we make it flexible (will fit any phone screen)
    //flex: 0,
    // seat a background colour for the box
    //backgroundColor: '#f5f5f5',
    // put the items in the center (as compared to left or right)
    //justifyContent: 'center',
    // put the items in the center (as compared to top or bottom)
    alignItems: 'center'
  },
  // we set what our group of radio buttons will look like
  radioGroup: {
    // put them next to each other, rather than on top of each other
    flexDirection: 'row',
    alignItems: 'center',
    // leave space around the object for other objects
    justifyContent: 'space-around',
    // add some space above
    marginTop: 20,
    // add an invisible border (for spacing)
    borderRadius: 8,
    // set a background colour
    backgroundColor: 'white',
    // add space all around (so its not touching the edge of the container)
    padding: 16,
    // more fine adjustments to the placement of the group of buttons inside the container
    // elevation makes it feel like its coming towards you slightly, a sense of "depth" almost
    elevation: 4,
    // setting up a very subtle shadow effect on the group of buttons
    shadowColor: '#000',
    // placing the shadow above/below the object
    shadowOffset: {
      width: 0,
      height: 2
    },
    // give the shadow some transparency (so its not just a solid colour)
    shadowOpacity: 0.25,
    // curve the edges
    shadowRadius: 4
  },
  radioButton: {
    // side byside
    flexDirection: 'row',
    alignItems: 'center'
  },
  radioLabel: {
    // add some space to the left of the label (between the button and label)
    marginLeft: 8,
    fontSize: 16,
    color: '#333' // gray-ish
  }
});
