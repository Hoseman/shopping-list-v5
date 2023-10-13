import './App.css';
import ProductList from './components/ProductList';
import Header from './components/Header';
import Footer from './components/Footer';


const products = [
  { id: 1, productName: 'Apples', price: 0.95 },
  { id: 2, productName: 'Apple Juice pack of 2', price: 1.78 },
  { id: 3, productName: 'Bananas', price: 1.49 },
  { id: 4, productName: 'Baking Potatoes', price: 1.50 },
  { id: 5, productName: 'Barbecue Sauce', price: 2.50 },
  { id: 6, productName: 'Battered Cod', price: 3.50 },
  { id: 7, productName: 'Bleach', price: 0.50 },
  { id: 8, productName: 'Bread - Sliced Loaf', price: 0.75 },
  { id: 9, productName: 'Broccoli', price: 1.00 },
  { id: 10, productName: 'Cabbage', price: 0.50 },
  { id: 11, productName: 'Carrots', price: 0.50 },
  { id: 12, productName: 'Chicken Strips', price: 2.00 },
  { id: 13, productName: 'Chicken Chunks', price: 4.00 },
  { id: 14, productName: 'Chips - Value Bag', price: 0.89 },
  { id: 15, productName: 'Cider', price: 5.49 },
  { id: 16, productName: 'Conditioner', price: 2.00 },
  { id: 17, productName: 'Coconut Water - Pack Of 3', price: 6.00 },
  { id: 18, productName: 'Coffee', price: 3.00 },
  { id: 19, productName: 'Deli Wraps', price: 0.89 },
  { id: 20, productName: 'Deodarant', price: 2.50 },
  { id: 21, productName: 'Donuts', price: 1.00 },
  { id: 22, productName: 'Dumplings', price: 3.50 },
  { id: 23, productName: 'Feta Cheese - cubed', price: 2.50 },
  { id: 24, productName: 'Fish Cakes', price: 1.50 },
  { id: 25, productName: 'Florette Salad', price: 1.79 },
  { id: 26, productName: 'Free From Cheese', price: 2.80 },
  { id: 27, productName: 'Hoi-Sin', price: 1.50 },
  { id: 28, productName: 'Honey', price: 0.79 },
  { id: 29, productName: 'Horseradish Sauce', price: 0.89 },
  { id: 30, productName: 'Kitched Towel', price: 1.50 },
  { id: 31, productName: 'Lemon Grass', price: 0.50 },
  { id: 32, productName: 'McCain Oven Chips', price: 3.50 },
  { id: 33, productName: 'McCain French Fries', price: 3.50 },
  { id: 34, productName: 'Mashed Potatoe', price: 1.50 },
  { id: 35, productName: 'Mature Chedder - 2 pack', price: 4.00 },
  { id: 36, productName: 'Mackeral Pate', price: 1.50 },
  { id: 37, productName: 'Minced Beef', price: 4.00 },
  { id: 38, productName: 'Milk - Long Life - Large Pack', price: 4.00 },
  { id: 39, productName: 'Mouthwash - Corsodyl', price: 4.00 },
  { id: 40, productName: 'Mouthwash - Value', price: 2.00 },
  { id: 41, productName: 'Mushrooms', price: 1.50 },
  { id: 42, productName: 'Nandos Lemon Marinade', price: 2.00 },
  { id: 43, productName: 'Onions', price: 0.50 },
  { id: 44, productName: 'Orange Juice - pack of 4', price: 3.50 },
  { id: 45, productName: 'Paella Stir Fry', price: 1.89 },
  { id: 46, productName: 'Party Sausages', price: 1.80 },
  { id: 47, productName: 'Pasata', price: 0.45 },
  { id: 48, productName: 'Pate - Pack Of 2', price: 1.60 },
  { id: 49, productName: 'Pears', price: 0.70 },
  { id: 50, productName: 'Philadephia Spread', price: 1.75},
  { id: 51, productName: 'Pizza - Value', price: 1.89 },
  { id: 52, productName: 'Pizza - Premium', price: 4.50 },
  { id: 53, productName: 'Plums', price: 2.00 },
  { id: 54, productName: 'Pork Stir Fry', price: 3.50 },
  { id: 55, productName: 'Potato Crockets', price: 1.50 },
  { id: 56, productName: 'Prawns (Frozen)', price: 3.30 },
  { id: 57, productName: 'Quiche', price: 2.00 },
  { id: 58, productName: 'Rice (4kg)', price: 5.00 },
  { id: 59, productName: 'Rice (2kg)', price: 2.70 },
  { id: 60, productName: 'Salad Creme', price: 0.70 },
  { id: 61, productName: 'Spring Onions', price: 0.50 },
  { id: 62, productName: 'Strawberries', price: 1.89 },
  { id: 63, productName: 'Sausages - 2 pack', price: 5.00 },
  { id: 64, productName: 'Salmon Fillets', price: 4.00 },
  { id: 65, productName: 'Sandwiches Cheese/Onion x3', price: 4.50 },
  { id: 66, productName: 'Shampoo', price: 2.00 },
  { id: 67, productName: 'Shower Gel', price: 1.50 },
  { id: 68, productName: 'Shortbread Biscuits', price: 1.00 },
  { id: 69, productName: 'Sweets - Pack Of 3', price: 3.30 },
  { id: 70, productName: 'Snickers', price: 1.59 },
  { id: 71, productName: 'Sweet Chilli Sauce', price: 1.80 },
  { id: 72, productName: 'Tartare Sauce', price: 0.50 },
  { id: 73, productName: 'Tea Bags - value brand', price: 0.80 },
  { id: 74, productName: 'Tomatoes', price: 0.89 },
  { id: 75, productName: 'Toothpaste - Value', price: 0.89 },
  { id: 76, productName: 'Toothpaste - Corsodyl', price: 3.50 },
  { id: 77, productName: 'Toilet Paper', price: 3.50 },
  { id: 78, productName: 'Tuna Steaks', price: 4.00 },
  { id: 79, productName: 'Tuna Tins - pack of 4', price: 3.50 },
  { id: 80, productName: 'Veg Frozen Birdseye', price: 2.40 },
  { id: 81, productName: 'Washing Up Liquid', price: 0.89 },
  { id: 82, productName: 'Walkers Cheese & Onions Crisps', price: 1.50 },
  { id: 83, productName: 'Walkers Spicy Prawn Crisps', price: 1.50 },
  { id: 84, productName: 'Wine - red/white', price: 5.50 },
  { id: 85, productName: 'Yoghurt Activia 2 large packs', price: 8.00 },
  
  
];

function App() {
  return (
    <div className="App">
        <Header></Header>
        <ProductList products={products} />
        <Footer></Footer>
    </div>
  );
}

export default App;
