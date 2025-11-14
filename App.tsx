import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList, ListRenderItem } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

type Book = {
  id: string,
  title: string,
  author: string
};

const FirstScreen = ({navigation}) => {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  var [bookCatalogue, setBookCatalogue] = useState<Book[]> ([
    {id: '1', title: 'MAST Module Manual 2025', author: 'IIE VC'},
    {id: '2', title: 'Principles of Design', author: 'Jo Hart'}
  ])
  const addNewBook = (title: string, author: string) => {
    const newBookId = (bookCatalogue.length + 1).toString();
    const newBook : Book = {id: newBookId, title: title, author: author}
    setBookCatalogue([...bookCatalogue, newBook]);
  };
  return (
    <View style={styles.container}>
      <Text>This is home screen!</Text>
      <TextInput placeholder='Please enter the book title' onChangeText={(newText) => setBookTitle(newText)}/>
        <TextInput placeholder='Please enter the book author'  onChangeText={(newText) => setBookAuthor(newText)}/>
          <Button title='Add Book' onPress={() => {
            addNewBook(bookTitle, bookAuthor);
            setTimeout(() => {
              navigation.navigate('FirstScreen', {bookSend: bookCatalogue});
            }, 2000);
            navigation.navigate('SecondScreen', {bookSend: bookCatalogue});
          }}/> 
      <StatusBar style="auto" />
    </View>
  );
}

const SecondScreen = ({navigation, route}) => {
  const bookGet = route.params.bookSend;
  const renderItem: ListRenderItem<Book> = ({item}) => (
    <View>
      <Text>Book Title: {item.title}, Book Author: {item.author}</Text>
    </View>
  )
  return (
    <View style={styles.container}>
      <Text>This is the second screen!</Text>
      <Button title='Go Back to Home Screen' onPress={
        navigation.navigate('FirstScreen')
      }/>
      <FlatList
          data={bookGet}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() =><View/> } 
          />
      <StatusBar style="auto" />
    </View>
  );
}


export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="FirstScreen" component={FirstScreen}/>
      <Stack.Screen name="SecondScreen" component={SecondScreen}/>
    </Stack.Navigator>
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
