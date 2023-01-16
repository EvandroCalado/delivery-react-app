import { Link } from "react-router-dom";
import productImg from "../../../assets/images/product-02.1.jpg"

const ProductCard = () => {
  return ( 
    <div className="product__item">
        <div className="product__img">
          <img src={productImg} alt="product-img" />
        </div>
        <div className="product__content">
          <h5><Link>Burger</Link></h5>
          <div>
            <span className="product__price">$24.00</span>
            <button className="add-to-cart__btn">Add to Cart</button>
          </div>
        </div>
    </div>
   );
}
 
export default ProductCard;