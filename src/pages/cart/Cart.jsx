import { useContext } from 'react';
import './Cart.css';
import CartProduct from '../../components/cartProduct/CartProduct';
import { CartContext } from '../../context/CartProvider';
import { UserContext } from '../../context/UserProvider';
import SizeEditModal from '../../components/sizeEditModal/SizeEditModal';
import { Navigate } from 'react-router-dom';
const Cart = () => {
    const { cart, modalOpen } = useContext(CartContext);
    
    //console.log("Cart Rendered", cart?.products[0]?.size);
    const { user } = useContext(UserContext);

    return (
        <>
            {
                !user ?
                    <Navigate to='/login' />
                    :
                    <>
                        <div className='cart_wrapper'>
                            {
                                cart?.products?.map((cartItem) => (
                                    <CartProduct id={cartItem._id} name={cartItem.name} size={cartItem.size} imgUrl={cartItem.imgUrl} price={cartItem.price} quantity={cartItem.quantity} />
                                ))
                            }
                            <div className="container mb-5">
                                <div className="cart_actions">
                                    <div className="total_price d-flex flex-column align-items-end">
                                        <p><span>TOTAL</span> Rs. {cart.totalAmount}</p>
                                        <button className='confirm_btn'>Confirm Order</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            modalOpen.open &&
                            <SizeEditModal />
                        }
                    </>
            }

        </>
    );
}

export default Cart;