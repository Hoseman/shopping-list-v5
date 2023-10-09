import React, { Component } from 'react';
import styles from '../style.module.css';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: null,
      totalPrice: 0,
      selectedProductsList: [],
      isContentVisible: true,
    };
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
      selectedProductsList.push(selectedProduct);
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





  render() {
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
        onClick={(event) => event.stopPropagation()} // Stop event propagation for this div
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
          <ul className={styles.added}>
            {selectedProductsList.map((product, index) => (
              <li key={product.id}>
                <span className={styles.item__name}><span className={styles.count}>{ index + 1 }</span>{product.productName} - £{product.price.toFixed(2)}</span>
                <button className={styles.input__small} onClick={() => this.handleDeleteItem(index)} >Delete</button>
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
