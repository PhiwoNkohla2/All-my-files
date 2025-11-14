// Christoffel-Place/App.tsx
// always remember to import React and other necessary components from react and react-native
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View, TextInput, Image, FlatList } from 'react-native';

// here we define what each StoreItem has (what attributes describe a shopping item)
type StoreItem = {              // We defined the structure of a StoreItem
  id: string;                   // Have special id for each item
  name: string;                 // Name of the item
  price: string;                // Price of the item
  category: string;             // Category of the item
  description: string;          // Description of the item
};

export default function App() {  // main App component

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
  const addNewItem = () => {
    if (!itemName || !itemPrice || !itemCategory || !itemDescription) return;
    
    // Created a new StoreItem object
    const newItem: StoreItem = {
      id: (productCatalogue.length + 1).toString(), // Unique id based on current length
      name: itemName,
      price: itemPrice,
      category: itemCategory,
      description: itemDescription,
    };
    // Updated the product catalogue state with the new item
    setProductCatalogue((prevList) => [newItem, ...prevList]);

    setItemName("");
    setItemPrice("");
    setItemCategory("");
    setItemDescription("");
  };
// Render header component with input fields and add button
  const renderHeader = () => (
    <View style={{ width: '100%', alignItems: 'center' }}> {/*  Header container*/}
      <Text style={styles.title}>Welcome to Christoffel's place!</Text> {/* Title text*/}

      {/* Input fields for new item details */}

      <TextInput
        placeholder="Item Name"
        value={itemName}
        onChangeText={setItemName}
        style={styles.input}
      />
      <TextInput
        placeholder="Item Price"
        value={itemPrice}
        onChangeText={setItemPrice}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Item Category"
        value={itemCategory}
        onChangeText={setItemCategory}
        style={styles.input}
      />
      {/* Multiline TextInput for the item description */}
      <TextInput
        placeholder="Item Description"
        value={itemDescription}
        onChangeText={setItemDescription}
        style={[styles.input, styles.multiline]}
        multiline
      />
      {/* Button to add new item */} 
      <Button title="Add New Item" onPress={addNewItem} />
    </View>
  );

  // Render footer component with total item count and images
  const renderFooter = () => (
    <View style={{ width: '100%', alignItems: 'center', paddingBottom: 24 }}>
      <Text style={{ marginTop: 8 }}>Total Item Count: {productCatalogue.length}</Text>

      {/* Displayed images for each category */}
      <Text style={{ marginTop: 12, fontWeight: '600' }}>Starters</Text>
      <Image style={styles.Images} source={require('./Images/burrata-bruschetta.jpg')} />
      <Image style={styles.Images} source={require('./Images/caprese-salad.jpg')} />
      <Image style={styles.Images} source={require('./Images/spinach-artichoke-dip.jpg')} />
      <Image style={styles.Images} source={require('./Images/vegetable-gyoza.jpg')} />
      <Image style={styles.Images} source={require('./Images/indian-chaat.jpg')} />
      <Image style={styles.Images} source={require('./Images/panner-cheese-balls.jpg')} />

      {/* Images for Main Course category */}
      <Text style={{ marginTop: 12, fontWeight: '600' }}>Main Course</Text>
      <Image style={styles.Images} source={require('./Images/lasagna.jpg')} />
      <Image style={styles.Images} source={require('./Images/tacos.jpg')} />
      <Image style={styles.Images} source={require('./Images/dapanji.jpg')} />
      <Image style={styles.Images} source={require('./Images/grilled-salmon-with-asparagus.jpg')} />
      <Image style={styles.Images} source={require('./Images/pan-fried-pork-escalope.jpg')} />
      <Image style={styles.Images} source={require('./Images/chicken-fettuccine-alfredo-pasta.jpg')} />

      {/* Images for Dessert category */}
      <Text style={{ marginTop: 12, fontWeight: '600' }}>Desserts</Text>
      <Image style={styles.Images} source={require('./Images/triple-vanilla-pound-cake.jpg')} />
      <Image style={styles.Images} source={require('./Images/apple-pie.jpg')} />
      <Image style={styles.Images} source={require('./Images/chocolate-brownies.jpg')} />
      <Image style={styles.Images} source={require('./Images/chocolate-mousse.jpg')} />
      <Image style={styles.Images} source={require('./Images/tiramisu.jpg')} />
      <Image style={styles.Images} source={require('./Images/cheesecake.jpg')} />

      {/* Footer text */}
      <Text>© 2025 Christoffel-Place. All rights reserved.</Text>
    </View>
  );

  {/*Main return statement rendering the app UI*/ }
  return (
    <View style={styles.container}>
      <FlatList
        data={productCatalogue}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View style={styles.displayItem}>
            <Text style={[styles.displayText, styles.itemName]}>{item.name} - {item.price}</Text>
            <Text style={styles.displayText}>{item.category} - {item.description}</Text>
          </View>
        )}
      
        ListHeaderComponent={renderHeader}
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  // Styles for title, input fields, display items, and images
  title: {
    marginBottom: 12,
    fontSize: 18,
    fontWeight: '600',
  },
  // Styles for input fields
  input: {
    width: '100%',
    padding: 8,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  // Additional style for multiline TextInput
  multiline: {
    minHeight: 60,
    textAlignVertical: 'top',
  },
  // Styles for each displayed item
  displayItem: {
    padding: 10,
    backgroundColor: '#b18636ff',
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
  },
  // Styles for text within displayed items
  displayText: {
    fontSize: 16,
  },
  // Styles for item name text
  itemName: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  // Styles for the FlatList containing all items
  itemList: {
    marginTop: 10,
    width: '100%',
  },
  // Styles for images
  Images: {
    width: 300,
    height: 200,
    marginTop: 8,
  },
});
// End of App.tsx

// ...existing code...
// Reference List (alphabetical order):
// Artofit, 2025 [electronic print]. Available at: <https://www.artofit.org/ideas/poundbunt-cakes> [Accessed 05 September 2025]
// ChineseFood (2025) ‘Dapanji’ [photography]. Wikimedia Commons. Available at: <https://www.chinesefoodwiki.org/Dapanji> [Accessed 05 September 2025]
// Cooking Classy, 2025 [electronic print]. Available at: <https://www.cookingclassy.com/caprese-salad/> [Accessed 05 September 2025]
// Fity Club, 2025 [electronic print]. Available at: <https://fity.club/lists/suggestions/tacos/> [Accessed 05 September 2025]
// Indian Chaat, 2025 [electronic print]. Available at: <https://storage.googleapisom/drrhbnymnliwoe/indian-appetizers-for-birthdayparty.html> [Accessed 05 September 2025]
// Inpired Pencil, 2025 [electronic print]. Available at: <https://ar.inspiredpencil.com/pictures-2023/chocolate-mousse> [Accessed 05 September 2025]
// Kitchen Sanctuary, 2025 [electronic print]. Available at: <https://www.kitchensanctuary.com/one-pan-spaghetti-and-meatballs/> [Accessed 08 September 2025]
// Kolbykash, 2025 [electronic print]. Available at: <https://kolbykash.com/mixedberry-cheesecake/> [Accessed 05 September 2025]
// My gorgeous recipes, 2025 [electronic print]. Available at: <https://www.mygorgeousrecipes.com/easy-tiramisu-recipe/> [Accessed 09 September 2025]
// Paneer Cheese Balls (YouTube). Available at: <https://www.youtube.com/watch?v=HSz1ZiAIJ-g> [Accessed 05 September 2025]
// PNG All, 2025 [electronic print]. Available at: <https://www.pngall.com/searchbutton-png/download/112315> [Accessed 05 September 2025]
// Prudent Penny Pincher, 2025 [electronic print]. Available at: <https://prudentpenny-pincher.blogspot.com/2021/06/easiest-way-to-cook-delicioushomemade.html> [Accessed 05 September 2025]
// RealFood Tesco, 2025 [electronic print]. Available at: <https://realfood.tesco.com/recipes/grilled-salmon-with-asparagus.html> [Accessed 05 September 2025]
// React Native (2025) Core Components and Native Components. Available at: <https://reactnative.dev/docs/next/intro-react-native-components> [Accessed 10 September 2025]
// React Native FlatList. Available at: <https://reactnative.dev/docs/flatlist> [Accessed 10 September 2025]
// React Native TextInput (multiline). Available at: <https://reactnative.dev/docs/textinput#multiline> [Accessed 10 September 2025]
// Spend with Pennies, 2025 [electronic print]. Available at: <https://www.spendwithpennies.com/easy-homemade-lasagna/> [Accessed 05 September 2025]
// The define dish, 2025 [electronic print]. Available at: <https://thedefineddish.com/skillet-spinach-artichoke-and-kale-dip/> [Accessed 05 September 2025]
// The Food Charlatan, 2025 [electronic print]. Available at: <https://thefoodcharlatan.com/chicken-fettuccine-alfredo/> [Accessed 05 September 2025]
// The Independent Institute of Education (IIE), 2025, Mobile App Scripting [MAST512 Module Manual]. The Independent Institute of Education: Unpublished
// Vecteezy, 2025 [electronic print]. Available at: <https://www.vecteezy.com/vectorart/44580662-white-hamburger-menu-3d-icon-for-website-ui> [Accessed 05 September 2025]
// Image sources referenced above were retained but filenames were normalized in the code to use dash-separated lowercase names (no spaces or ampersands).
// End of Reference List

