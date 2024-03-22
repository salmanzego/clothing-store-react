import './CartProduct.css'
// import { deleteFromCart } from '../../utils/deleteFromCart';
import { CartContext } from '../../context/CartProvider';
import { useContext } from 'react';

const CartProduct = ({ id, name, size, imgUrl, price, quantity}) => {

    const {handleCount, handleDelete, handleModal } = useContext(CartContext);
    
    console.log("Cart Product rendered", size);
    return (
        <div className="cart_product">
            <div className="container">
                <div className="row">
                    <div className="prod_image col-6 col-lg-4">
                        <img src={imgUrl} alt="" className="img-fluid" />
                    </div>
                    <div className="prod_details col-6 col-lg-8">
                        <div className="row">
                            <div className="prod_content col-12 col-lg-4">
                                <p className="prod_name">{name}</p>
                                <p className="prod_size">{size}</p>
                            </div>
                            <div className="prod_actions col-12 col-lg-8">
                                <div className="row">
                                    <div className="action_btns col-12 col-lg-4">
                                        <button onClick={() => { handleDelete(id) }}>Delete</button>
                                        <button onClick={()=> { handleModal(id, size, quantity) }}>Edit</button>
                                    </div>
                                    <div className="quantity col-12 col-lg-4 mt-3 mt-lg-0">
                                        <button onClick={() => { handleCount(id, -1, quantity, size) }}>-</button>
                                        <div className="count">{quantity}</div>
                                        <button onClick={() => { handleCount(id, 1, quantity, size) }}>+</button>
                                    </div>
                                    <p className="prod_price col-12 col-lg-4 mt-3 mt-lg-0">₹{price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartProduct;