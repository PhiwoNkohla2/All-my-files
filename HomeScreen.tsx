// Christoffel-Place/App.tsx
// always remember to import React and other necessary components from react and react-native
import React, { useState } from 'react';
import { StyleSheet, Text, Button, View, TextInput, Image, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// here we define what each StoreItem has (what attributes describe a shopping item)
type StoreItem = {              // We defined the structure of a StoreItem            //(The IIE, 2025).
  id: string;                   // Have special id for each item
  name: string;                 //Name of the item
  price: string;                // Price of the item
  category: string;             // Category of the item
  description: string;          // Description of the item
};

export default function HomeScreen() {  // main App component      //(The IIE, 2025).

  // State variables for new item inputs
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [itemDescription, setItemDescription] = useState("");  
  const [productCatalogue, setProductCatalogue] = useState<StoreItem[]>([
    // Initial product catalogue with all desplayed items
    { id: "1", name: "Burrata Bruschetta", price: "R110", category: "Starter", description: "An easy appetizer topped with marinated cherry tomatoes,fresh orange and mint" },
    { id: "2", name: "Caprese Salad", price: "R130", category: "Starter", description: "A classic Italian dish filled with soft, creamy fresh mozzarella,juicy seasonal tomatoes, and  a generous amount of basil leaves." },
    { id: "3", name: "Spinach & Artichoke Dip", price: "R150", category: "Starter", description: "A warm, savory, and rich appetizer featuring a creamy, cheesy base loaded with spinach and earthy, tangy artichoke hearts."},
    { id: "4", name: "Vegetable gyoza", price: "R55", category: "Starter", description: "Japanese potstickers with a thin, round wheat-flour wrapper encasing a savory filling of various vegetables,such as cabbage, carrots, mushrooms, and chives, oftenwith ginger, garlic and soy sauce." },
    { id: "5", name: "Indian Chaat", price: "R75", category: "Starter", description: "A diverse category of popular South Asian street food, snacks, characterised by a balance of sweet, spicy, tangy, savory, and crunchy textures." },
    { id: "6", name: "Panner Cheese Balls", price: "R50", category: "Starter", description: "They consist of a mixture of paneer and spices, stuffed with cheese, shaped into balls, coated in breadcrumbs, and deep-fried until golden and cripsy" },
    { id: "7", name: "Lasagna", price: "R150", category: "Main Course", description: "Lasagna is a wide, flat sheet of pasta dish which consists of several layers of lasagna sheets with sauce, meats & cheese." },
    { id: "8", name: "Tacos", price: "R200", category: "Main Course", description: "A traditional Mexican dish of seasoned fillings - such as meat, vegetables, or cheese - served inside a folded or rolled, hand-sized corn or wheat tortilla." },
    { id: "9", name: "Dapanji", price: "R150", category: "Main Course", description: "A hearty braised chicken stew from Xinjiang, China, known for its smoky, spicy, and complex flavour from cumin, Sichuan pepper, and chili bean paste." },
    { id: "10", name: "Triple Vanilla Pound Cake", price: "R75", category: "Dessert", description: "A rich and moist pound cake flavored with vanilla extract, vanilla bean, and vanilla frosting." },
    { id: "11", name: "Apple Pie", price: "R45", category: "Dessert", description: "A sweet featuring sliced, seasoned apples baked inside a double-crushed pie shell, typically made with a flaky pastry and filled with a spiced apple mixture seasoned with cinnamon" },
    { id: "12", name: "Chocolate Brownies", price: "R20", category: "Dessert", description: "A dense, square or rectangular baked dessert bar with a rich chocolate flavour." },
    { id: "13", name: "Chocolate Mousse", price: "R74.99", category: "Dessert", description: "A classic French dessert known for its dual texture of richness and airy lightness."},
    { id: "14", name: "Tiramisu", price: "R109.99", category: "Dessert", description: "A classic Italian dessert featuring alternating layers of coffee-soaked ladyfingers (savoiardi) and a rich cream made from mascarpone." },
    { id: "15", name: "Cheesecake", price: "R90", category: "Dessert", description: "A dessert with a dense, smooth, and creamy filling made primarily from fresh cheese (like cream cheese), eggs and sugar, atop a crust of graham crackers, cookies, or pastry." },
    { id: "16", name: "Grilled salmon with asparagus", price: "R200", category: "Main Course", description: "A simple yet elegant dish featuring a tender, flaky salmon fillet and crisp-tender spears of asparagus."},
    { id: "17", name: "Pan-fried pork escalope with leeks and blood-red orange", price: "R144.99", category: "Main Course", description: "A sophisticated dish consisting tender, flattened pork coated in a light crust and seared to a golden brown." },
    { id: "18", name: "Chicken Fettuccine Alfredo Pasta", price: "R160", category: "Main Course", description: "An American-Italian pasta dish consisting fettuccine noodles and tender, seasoned chicken tossed in a rich, creamy, cheesy, and garlicky alfredo sauce made from butter, heavy cream and Parmesan cheese." },
  ]);

  // Created a function to add a new item to the product catalogue
  const addNewItem = () => {        //(The IIE, 2025).
    if (!itemName || !itemPrice || !itemCategory || !itemDescription) return;
    
    // Created a new StoreItem object
    const newItem: StoreItem = {            //(The IIE, 2025).
      id: (productCatalogue.length + 1).toString(), // Unique id based on current length
      name: itemName,
      price: itemPrice,
      category: itemCategory,
      description: itemDescription,
    };
    // Updated the product catalogue state with the new item
    setProductCatalogue((prevList) => [newItem, ...prevList]);    //(The IIE, 2025).

    setItemName("");
    setItemPrice("");
    setItemCategory("");
    setItemDescription("");
  };
// Render header component with input fields and add button
  const renderHeader = () => (        //(The IIE, 2025).
    <View style={{ width: '100%', alignItems: 'center' }}> {/*  Header container*/}
      <Text style={styles.title}>Welcome to Christoffel's place!</Text> {/* Title text*/}

      {/* Input fields for new item details */}

      <TextInput      //(The IIE, 2025).
        placeholder="Item Name"
        value={itemName}
        onChangeText={setItemName}
        style={styles.input}
      />
      <TextInput    //(The IIE, 2025).  
        placeholder="Item Price"
        value={itemPrice}
        onChangeText={setItemPrice}
        style={styles.input}
        keyboardType="numeric" // Ensures numeric keyboard for price input
      />
      <TextInput    //(The IIE, 2025).
        placeholder="Item Category"
        value={itemCategory}
        onChangeText={setItemCategory}
        style={styles.input}
      />
    
      <TextInput  //(The IIE, 2025).
        placeholder="Item Description"
        value={itemDescription}
        onChangeText={setItemDescription}
        style={[styles.input, styles.multiline]}
        multiline
      />
      {/* Button to add new item */}    {/*The IIE, 2025*/}
      <Button title="Add New Item" onPress={addNewItem} />
    </View>
  );

  // Render footer component with total item count and images
  const renderFooter = () => (    //(The IIE, 2025).
    <View style={{ width: '100%', alignItems: 'center', paddingBottom: 24 }}>
      <Text style={{ marginTop: 8 }}>Total Item Count: {productCatalogue.length}</Text>

      {/* Displayed images for each category */}
      <Text style={{ marginTop: 12, fontWeight: '600' }}>Starters</Text> {/*W3Schools, 2025 */}
      <Image style={styles.Images} source={require('./Images/burrata-bruschetta.jpg')} />
      <Image style={styles.Images} source={require('./Images/caprese-salad.jpg')} />
      <Image style={styles.Images} source={require('./Images/spinach-artichoke-dip.jpg')} />
      <Image style={styles.Images} source={require('./Images/vegetable-gyoza.jpg')} />
      <Image style={styles.Images} source={require('./Images/indian-chaat.jpg')} />
      <Image style={styles.Images} source={require('./Images/panner-cheese-balls.jpg')} />

      {/* Images for Main Course category */}
      <Text style={{ marginTop: 12, fontWeight: '600' }}>Main Course</Text> {/*W3Schools, 2025 */}
      <Image style={styles.Images} source={require('./Images/lasagna.jpg')} />
      <Image style={styles.Images} source={require('./Images/tacos.jpg')} />
      <Image style={styles.Images} source={require('./Images/dapanji.jpg')} />
      <Image style={styles.Images} source={require('./Images/grilled-salmon-with-asparagus.jpg')} />
      <Image style={styles.Images} source={require('./Images/pan-fried-pork-escalope.jpg')} />
      <Image style={styles.Images} source={require('./Images/chicken-fettuccine-alfredo-pasta.jpg')} />

      {/* Images for Dessert category */}
      <Text style={{ marginTop: 12, fontWeight: '600' }}>Desserts</Text> {/*W3Schools, 2025 */}
      <Image style={styles.Images} source={require('./Images/triple-vanilla-pound-cake.jpg')} />
      <Image style={styles.Images} source={require('./Images/apple-pie.jpg')} />
      <Image style={styles.Images} source={require('./Images/chocolate-brownies.jpg')} />
      <Image style={styles.Images} source={require('./Images/chocolate-mousse.jpg')} />
      <Image style={styles.Images} source={require('./Images/tiramisu.jpg')} />
      <Image style={styles.Images} source={require('./Images/cheesecake.jpg')} />

      {/* Footer text */}
      <Text>© 2025 Christoffel-Place. All rights reserved.</Text> {/*The IIE, 2025 */}
    </View>
  );

  // Main return of the App component
  return (  //(The IIE, 2025).
    <View style={styles.container}>   {/* Main container view */} {/*The IIE, 2025 */}
      <FlatList
        data={productCatalogue}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View style={styles.displayItem}>
            <Text style={[styles.displayText, styles.itemName]}>{item.name} - {item.price}</Text>
            <Text style={styles.displayText}>{item.category} - {item.description}</Text>
          </View>
        )}
      
        ListHeaderComponent={renderHeader}   //(The IIE, 2025). 
        ListFooterComponent={renderFooter}
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 40, width: '100%' }}
        style={styles.itemList}
      />
      {/* Status bar at the bottom of the app */}
      <StatusBar style="auto" />
    </View>
  );
}
// Styles for the app components
const styles = StyleSheet.create({    //(The IIE, 2025).
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  // Styles for title, input fields, display items, and images
  title: {                            //(The IIE, 2025).
    marginBottom: 12,
    fontSize: 18,
    fontWeight: '600',
  },
  // Styles for input fields
  input: {                //(The IIE, 2025).
    width: '100%',
    padding: 8,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  // Additional style for multiline TextInput
  multiline: {              //(The IIE, 2025).  
    minHeight: 60,
    textAlignVertical: 'top',
  },
  // Styles for each displayed item
  displayItem: {        //(The IIE, 2025).  
    padding: 10,
    backgroundColor: '#90EE90',
    borderColor: '#ffffff',
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
  },
  // Styles for text within displayed items
  displayText: {
    fontSize: 16,
  },
  // Styles for item name text
  itemName: {               //(The IIE, 2025).
    fontWeight: 'bold',
    marginBottom: 4,
  },
  // Styles for the FlatList containing all items
  itemList: {               //(The IIE, 2025).
    marginTop: 10,
    width: '100%',
  },
  // Styles for images
  Images: {   // (W3schools, 2025)
    width: 300,
    height: 200,
    marginTop: 8,
  },
});