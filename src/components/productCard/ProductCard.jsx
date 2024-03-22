import { useContext } from 'react';
import './ProductCard.css';
import { CartContext } from '../../context/CartProvider';


const ProductCard = ({ title, price, image, id }) => {
    const { modalOpen, setModalOpen } = useContext(CartContext);
    const handleAdd = (id) => {
        console.log(id);
        setModalOpen({ open: !modalOpen.open, size: "", id: id, quantity: "" });
    }

    return (
        <>
            <div className="product_card">
                <div className="product_img">
                    <img src={image} alt="" />
                </div>
                <div className="product_content">
                    <p className="product_title text-center">{title}</p>
                    <div className="product_actions">
                        <p className="price">₹{price}</p>
                        <button className="product_btn" onClick={() => {handleAdd(id)}}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductCard;