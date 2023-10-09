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
  { id: 8, productName: 'Broccoli', price: 1.00 },
  { id: 9, productName: 'Cabbage', price: 0.50 },
  { id: 10, productName: 'Carrots', price: 0.50 },
  { id: 11, productName: 'Chicken Strips', price: 2.00 },
  { id: 12, productName: 'Chicken Chunks', price: 4.00 },
  { id: 13, productName: 'Chips - Value Bag', price: 0.89 },
  { id: 14, productName: 'Cider', price: 5.49 },
  { id: 15, productName: 'Conditioner', price: 2.00 },
  { id: 16, productName: 'Coconut Water - Pack Of 3', price: 6.00 },
  { id: 17, productName: 'Coffee', price: 3.00 },
  { id: 18, productName: 'Deli Wraps', price: 0.89 },
  { id: 19, productName: 'Deodarant', price: 2.50 },
  { id: 20, productName: 'Donuts', price: 1.00 },
  { id: 21, productName: 'Dumplings', price: 3.50 },
  { id: 22, productName: 'Feta Cheese - cubed', price: 2.50 },
  { id: 23, productName: 'Fish Cakes', price: 1.50 },
  { id: 24, productName: 'Florette Salad', price: 1.79 },
  { id: 25, productName: 'Free From Cheese', price: 2.80 },
  { id: 26, productName: 'Hoi-Sin', price: 1.50 },
  { id: 27, productName: 'Honey', price: 0.79 },
  { id: 28, productName: 'Horseradish Sauce', price: 0.89 },
  { id: 29, productName: 'Kitched Towel', price: 1.50 },
  { id: 30, productName: 'Lemon Grass', price: 0.50 },
  { id: 31, productName: 'McCain Oven Chips', price: 3.50 },
  { id: 32, productName: 'McCain French Fries', price: 3.50 },
  { id: 33, productName: 'Mashed Potatoe', price: 1.50 },
  { id: 34, productName: 'Mature Chedder - 2 pack', price: 4.00 },
  { id: 35, productName: 'Mackeral Pate', price: 1.50 },
  { id: 36, productName: 'Minced Beef', price: 4.00 },
  { id: 37, productName: 'Milk - Long Life - Large Pack', price: 4.00 },
  { id: 38, productName: 'Mouthwash - Corsodyl', price: 4.00 },
  { id: 39, productName: 'Mouthwash - Value', price: 2.00 },
  { id: 40, productName: 'Mushrooms', price: 1.50 },
  { id: 41, productName: 'Onions', price: 0.50 },
  { id: 42, productName: 'Orange Juice - pack of 4', price: 3.50 },
  { id: 43, productName: 'Paella Stir Fry', price: 1.89 },
  { id: 44, productName: 'Party Sausages', price: 1.80 },
  { id: 45, productName: 'Pasata', price: 0.45 },
  { id: 46, productName: 'Pate - Pack Of 2', price: 1.60 },
  { id: 47, productName: 'Pears', price: 0.70 },
  { id: 48, productName: 'Pizza - Value', price: 1.89 },
  { id: 49, productName: 'Pizza - Premium', price: 4.50 },
  { id: 50, productName: 'Plums', price: 2.00 },
  { id: 51, productName: 'Pork Stir Fry', price: 3.50 },
  { id: 52, productName: 'Potato Crockets', price: 1.50 },
  { id: 53, productName: 'Prawns (Frozen)', price: 3.30 },
  { id: 54, productName: 'Quiche', price: 2.00 },
  { id: 55, productName: 'Rice (4kg)', price: 5.00 },
  { id: 56, productName: 'Rice (2kg)', price: 2.70 },
  { id: 57, productName: 'Salad Creme', price: 0.70 },
  { id: 58, productName: 'Spring Onions', price: 0.50 },
  { id: 59, productName: 'Strawberries', price: 1.89 },
  { id: 60, productName: 'Sausages - 2 pack', price: 5.00 },
  { id: 61, productName: 'Salmon Fillets', price: 4.00 },
  { id: 62, productName: 'Shampoo', price: 2.00 },
  { id: 63, productName: 'Shower Gel', price: 1.50 },
  { id: 64, productName: 'Shortbread Biscuits', price: 1.00 },
  { id: 65, productName: 'Sweets - Pack Of 3', price: 3.30 },
  { id: 66, productName: 'Tartare Sauce', price: 0.50 },
  { id: 67, productName: 'Tea Bags - value brand', price: 0.80 },
  { id: 68, productName: 'Tomatoes', price: 0.89 },
  { id: 69, productName: 'Toothpaste - Value', price: 0.89 },
  { id: 70, productName: 'Toothpaste - Corsodyl', price: 3.50 },
  { id: 71, productName: 'Tuna Steaks', price: 4.00 },
  { id: 72, productName: 'Washing Up Liquid', price: 0.89 },
  { id: 73, productName: 'Walkers Cheese & Onions Crisps', price: 1.50 },
  { id: 74, productName: 'Walkers Spicy Prawn Crisps', price: 1.50 },
  { id: 75, productName: 'Yoghurt Activia 2 large packs', price: 8.00 },
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