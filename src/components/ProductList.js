import React, { Component } from 'react';
import styles from '../style.module.css';
import iconTrash from '../trash-solid.svg';
import iconEye from '../eye-solid.svg';
import iconDisableEye from '../eye-slash-solid.svg';
import './productlist.css';

class ProductList extends Component {
  constructor(props) {
    super(props);

    const savedState = JSON.parse(localStorage.getItem('productListState')) || {
      selectedProduct: null,
      totalPrice: 0,
      selectedProductsList: [],
      isContentVisible: true,
    };
    this.state = savedState;

  }


  saveStateToLocalStorage = () => {
    localStorage.setItem('productListState', JSON.stringify(this.state));
  };


  componentDidUpdate() {
    this.saveStateToLocalStorage();
  }


  handleProductSelect = (event) => {
    const selectedProductId = parseInt(event.target.value);
    const selectedProduct = this.props.products.find(
      (product) => product.id === selectedProductId
    );

    if (selectedProduct) {
      this.setState({ selectedProduct });
    }
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { selectedProduct, selectedProductsList } = this.state;

    if (selectedProduct) {

      const updatedProduct = {
        ...selectedProduct,
        selectedClass: '', // Initialize a property to track the CSS class
        icon: iconEye, // Set the initial icon to iconEye
      };

      selectedProductsList.push(updatedProduct);
      //selectedProduct.selectedClass = ''; // Initialize a property to track the CSS class

      const totalPrice = selectedProductsList.reduce(
        (total, product) => total + product.price,
        0
      );

      this.setState({
        selectedProduct: null,
        totalPrice,
        selectedProductsList,
      });
    }
  };

  handleDeleteItem = (index) => {
    const { selectedProductsList } = this.state;

    // Remove the selected item from the list
    selectedProductsList.splice(index, 1);

    // Recalculate the total price
    const totalPrice = selectedProductsList.reduce(
      (total, product) => total + product.price,
      0
    );

    this.setState({
      selectedProductsList,
      totalPrice,
    });
  };



  handleToggle = (event) => {
    event.stopPropagation();
    this.setState((prevState) => ({
      isContentVisible: !prevState.isContentVisible,
    }));
  };



  toggleClass = (index) => {
    const { selectedProductsList } = this.state;
  
    // Toggle the CSS class on the selected item
    selectedProductsList[index].selectedClass = selectedProductsList[index].selectedClass === 'inactive-button' ? 'active-button' : 'inactive-button';
  
    // Toggle the icon based on the selectedClass
    selectedProductsList[index].icon = selectedProductsList[index].selectedClass === 'inactive-button' ? iconDisableEye : iconEye;
  
    this.setState({
      selectedProductsList,
    });
  };


  render() {
    //const buttonClass = this.state.isActive ? 'inactive-button' : 'active-button';
    const { products } = this.props;
    const {
      selectedProductsList,
      totalPrice,
      isContentVisible,
    } = this.state;

    return (
      <>
        <div onClick={this.handleToggle} className={styles.menu__switcher}>
            {isContentVisible ? '-' : '+'}
        </div>



        <div
        className={`${styles.fixed_content} ${isContentVisible ? '' : styles.hidden}`}
        onClick={(event) => event.stopPropagation()} 
      >
            <h2 className={styles.subheading}>Add and Remove Items with Prices</h2>
            <form className={styles.form__wrapper} onSubmit={this.handleFormSubmit}>
            <label className={styles.form__label}>
                <select className={styles.input} onChange={this.handleProductSelect}>
                <option value="">Select a product</option>
                {products.map((product) => (
                    <option key={product.id} value={product.id}>
                    {product.productName} - £{product.price.toFixed(2)}
                    </option>
                ))}
                </select>
            </label>
            <button className={styles.input} type="submit">Add</button>
            </form>
        </div>  

        <div>
          <h2>Added Items({ selectedProductsList.length }):</h2>
          <ul id="mylist" className={styles.added}>

          {selectedProductsList.map((product, index) => (
              <li className={product.selectedClass || ''} key={product.id}>
                <span className={styles.item__name}>
                  <span className={styles.count}>{index + 1}</span>
                  {product.productName} - £{product.price.toFixed(2)}
                </span>
                <button onClick={() => this.toggleClass(index)} className={styles.input__small_2}>
                  <img alt="eye" className={styles.icon_2} src={product.icon} /> {/* Add src attribute here */}
                </button>
                <button className={styles.input__small} onClick={() => this.handleDeleteItem(index)}>
                  <img alt="trash" className={styles.icon} src={iconTrash} />
                </button>
              </li>
            ))}


        </ul>
        </div>

        <div>
          <h2>Total Price: £{totalPrice.toFixed(2)}</h2>
        </div>

    </>
    );
  }
}

export default ProductList;
