import './AddCartModal.css';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartProvider';
import { getProductById } from '../../utils/getProductbyId';
import { addToCart } from '../../utils/addToCart';
import { getCart } from '../../utils/getCart';
import { UserContext } from '../../context/UserProvider';
import { useNavigate } from 'react-router-dom';
const AddCartModal = () => {

    const { modalOpen, setCart, setModalOpen } = useContext(CartContext);
    const { user } = useContext(UserContext)
    const [sizes, setSizes] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setselectedSize] = useState('');
    const navigate = useNavigate();
    const handleCount = (add) => {
        setQuantity(quantity + add);
    }

    const handleAddToCart = (itemId) => {
        user ? 
        addToCart(itemId, quantity, selectedSize).then(res => {
            console.log("added");
            getCart().then(data => {
                setCart(data);
                setModalOpen({ open: !modalOpen.open, size: "", id: "" });
            });
        })
        : 
        setModalOpen({ open: !modalOpen.open, size: "", id: "" });
        navigate('/login');
    }

    useEffect(() => {
        getProductById(modalOpen.id).then(data => {
            data = data.size;
            setSizes(data);
        })
    }, [modalOpen]);

    return (
        <>
            <div className="addcart_modal">
                <div className='size_list'>
                    {sizes.map((size) => (
                        <>
                            <input type="radio" name="size" id={`size_${size}`} hidden onChange={() => { setselectedSize(size) }} />
                            <label htmlFor={`size_${size}`} className='size'>{size}</label>
                        </>
                    ))}
                </div>

                <div className="quantity mt-3">
                    <button onClick={() => { (quantity > 1) ? handleCount(-1) : handleCount(0) }}>-</button>
                    <div className="count">{quantity}</div>
                    <button onClick={() => { handleCount(1) }}>+</button>
                </div>


                <div className="save_btn" onClick={() => { handleAddToCart(modalOpen.id) }}>
                    Add
                </div>
            </div>
        </>
    )
}

export default AddCartModal;