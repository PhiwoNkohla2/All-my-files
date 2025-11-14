// ...existing code...
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Button, View, FlatList } from 'react-native';
import { useState } from 'react';

// ...existing code...
type StoreItem = {
  id: string; // id helps differentiate
  name: string;
  price: string;
}

export default function App() {
  const [itemName, setItemName] = useState<string>('');
  const [itemPrice, setItemPrice] = useState<string>('');
  const [catalogue, setCatalogue] = useState<StoreItem[]>([
    { id: "1", name: "Bread", price: "R12" },
    { id: "2", name: "Butter", price: "R18" }
  ]);

  const addNewItem = (name: string, price: string) => {
    if (!name.trim() || !price.trim()) return;
    const newItem: StoreItem = {
      id: Date.now().toString(),
      name,
      price
    };
    setCatalogue(prev => [newItem, ...prev]);
    setItemName('');
    setItemPrice('');
  }

  const renderItem = ({ item }: { item: StoreItem }) => (
    <View style={styles.item}>
      <Text>{item.name} — {item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>Welcome to Store!</Text>
      <TextInput
        placeholder='Please enter an item name'
        value={itemName}
        onChangeText={setItemName}
        style={styles.input}
      />
      <TextInput
        placeholder='Please enter an item price'
        value={itemPrice}
        onChangeText={setItemPrice}
        style={styles.input}
      />
      <Button
        title='Add new item to catalogue'
        onPress={() => addNewItem(itemName, itemPrice)}
      />
      <FlatList
        data={catalogue}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        style={{ width: '100%', marginTop: 16 }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  input: {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    marginTop: 8,
    borderRadius: 4,
  },
  itemSeparator: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 8,
  },
  item: {
    paddingVertical: 8,
  },
});
// ...existing