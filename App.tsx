import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button,  View } from 'react-native';
import {useState} from 'react';
import { TextInput } from 'react-native';
import { FlatList } from 'react-native';

// here we define what each StoreItem has (what attributes describe a shopping item)
type StoreItem = {
  id: string;
  name: string;
  price: string;
  category: string;
  description: string;
};

export default function App() {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [itemDescription, setItemDescription] = useState("");  
  const [productCatalogue, setProductCatalogue] = useState<StoreItem[]>([]);

  const addNewItem = () => {
    // check if all fields have information, otherwise we exit to not add blank info to the list
    if (!itemName || !itemPrice || !itemCategory || !itemDescription) return;
    
    const newItem: StoreItem = {
      id: (productCatalogue.length + 1).toString(), // simple id generation based on length
      name: itemName,
      price: itemPrice,
      category: itemCategory,
      description: itemDescription,
    };

    setProductCatalogue((prevList) => [newItem, ...prevList]);

    // clear input fields after adding and let the user add a new item
    setItemName("");
    setItemPrice("");
    setItemCategory("");
    setItemDescription("");
  };

  return (
    <View style={styles.container}>
      <Text>Flatlist Recap!</Text>
      <TextInput
        placeholder="Item Name"
        value={itemName}
        onChangeText={setItemName}
        />
      <TextInput
        placeholder='Item Price'
        value={itemPrice}
        onChangeText={setItemPrice}
      />
      <TextInput
        placeholder='Item Category'
        value={itemCategory}
        onChangeText={setItemCategory}
      />
      <TextInput
        placeholder='Item Description'
        value={itemDescription}
        onChangeText={setItemDescription}
      />
      <Button title="Add New Item" 
      onPress={addNewItem} />
      <FlatList
      data={productCatalogue}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <View style={styles.displayItem}>
          <Text style={styles.displayText}>
            {item.name} - {item.price}</Text>
          <Text style={styles.displayText}>{item.category} - {item.description}</Text>
        </View>
      )}
      style={styles.itemList}
      />
      <Text>Total Item Count: {productCatalogue.length}</Text>
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
  displayItem: {
    padding: 10,
    backgroundColor: '#f9c2ff',
    borderRadius: 5,
    marginBottom: 10,
  },
  displayText: {
    fontSize: 16,
  },
  itemList: {
    marginTop: 10,
  },
});
