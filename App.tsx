import { StatusBar } from 'expo-status-bar';
import {useState, useEffect} from 'react';
import { StyleSheet, Text, View,  FlatList,Button, TextInput} from 'react-native';



// defining our type
type StoreItem = {
  id: string,
  name: string,
  category: string,
  price: number,
}


export default function App() { // main App component

  // creating our items
const [items, setItems]  = useState<StoreItem[]> ([
  {id:"1", name:"Apples", category:"Food", price: 35 },
  {id:"2", name:"Banana", category:"Food", price: 20 },
  {id:"3", name:"Lolly", category:"Food", price: 40 },
  {id:"4", name:"Charger", category:"Tech", price: 100 },
  {id:"5", name:"Headphones", category:"Tech", price: 300 },
  {id:"6", name:"Samsung phone", category:"Tech", price: 20000 },
  {id:"7", name:"Cloth", category:"General", price: 15 },
  {id:"8", name:"Bleach", category:"General", price: 45 },
  {id:"9", name:"Rattex", category:"General", price: 60 },
]);

const [searchTerm, setSearchTerm] = useState("");
const [filteredList, setFilteredList] = useState<StoreItem[]>(items);   //Not committed yet

const [foodAverage, setFoodAverage] = useState(0);
const [techAverage, setTechAverage] = useState(0);
const [generalAverage, setGeneralAverage] = useState(0);

function calculateAverages() {
// keep track of how many of each type of item we have..
  let foodCount = 0;
  let techCount = 0;
  let generalCount = 0;

  let foodAverage= 0;
  let techAverage = 0;
  let generalAverage = 0;

// for each item in our list of items
items.forEach(item => {
  // we check if the item is a food item
  if (item.category === "Food") {
    //if it is, we add the price to the average price so far (we will calculate the average later)
foodAverage += item.price
    // and update our counter
    foodCount++;
    //we do the same but for each
  } else if (item.category === "Tech") {
    techAverage += item.price;
    techCount++;
    //and the same for general items
  }else {
    generalAverage += item.price;
    generalCount++;
  }
  console.log(item.price);
});
// AVERAGE = TOTAL / NUMBER OF ITEMS
setFoodAverage(foodAverage/foodCount);
setTechAverage(techAverage/techCount);
setGeneralAverage(generalAverage/generalCount);
}

// deteleting an item
function handleDelete(id: string) {
  // go through each item in the list, and add every item EXCEPT the item with the id we want to delete to a new, updated list
  const updatedList = items.filter(
    // running through each item adding every item except the one with the matching id we want to delete
    (item) => item.id !== id
  );
  // replace the main item list, with this new list that DOESN'T contain the deleted item
  setItems(updatedList);
}

useEffect(() => {
  calculateAverages();
  console.log("Averages calculated.");
}, []);

useEffect(() => {
  // if there is nothing in the search box, we reset the list of filtered items to match the list of ALL items
  if (searchTerm.trim() == "") {
    setFilteredList(items);
    // otherwise, we filter the list based on the search term
  } else {
    // converts the search term to all lower case (to avoid issueswith case sensitivity)
    const lower = searchTerm.toLowerCase();
    setFilteredList(
      // to be a filtered version of the main list
      items.filter(
        // where the items contain the search term we entered (converted to lowercase)
        (item) => item.name.toLowerCase().includes(lower)
      )
    );
  }
  }, [searchTerm, items]);

  return (
    <View style={styles.container}>
      <Text>Welcome to the ultimate Spaza Shop.</Text>
      <Text>These are the items we are selling today:</Text>
      <TextInput
      placeholder="Enter an name to search by..."
      value={searchTerm}
      onChangeText={setSearchTerm}
      />
      <FlatList
        data={filteredList}
        keyExtractor={(storeItem) => storeItem.id}
        renderItem={({item}) => (
          <View>
            <Text>
            {item.name} - {item.category}
            </Text>
            <Text>R{item.price.toFixed(2)}</Text>
            <Button title='Remove item' onPress={() => handleDelete(item.id)}></Button>
          </View>
        )}
        />
        <Text>Average price of Food items: {foodAverage}</Text>
        <Text>Average price of Tech items: {techAverage}</Text>                    
        <Text>Average price of General items: {generalAverage}</Text>
        <Button title='Update Prices' onPress={calculateAverages}></Button>
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
  listItem: {
padding: 10,
backgroundColor: "#f2f2",
borderRadius: 2,
marginBottom: 10,
  },

  display: {
    fontSize:16,
  },

  itemList: {
    marginTop: 10,
  },
});


