import './SizeEditModal.css';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartProvider';
import { getProductById } from '../../utils/getProductbyId';
import { editCart } from '../../utils/editCart';


const SizeEditModal = () => {
    const { handleEdit, modalOpen } = useContext(CartContext);
    const [sizes, setSizes] = useState([]);
    const [selectedSize, setselectedSize] = useState('');

    useEffect(() => {
        getProductById(modalOpen.id).then(data => {
            data = data.size;
            setSizes(data);
        })
    }, [modalOpen])
    return (
        <div className="edit_modal">
            <div className='size_list'>
                {sizes.map((size) => (
                    <>
                        {
                            modalOpen.size === size ?
                                <input type="radio" name="size" id={`size_${size}`} hidden checked onChange={()=>{setselectedSize(size)}}/> :
                                <input type="radio" name="size" id={`size_${size}`} hidden onChange={()=>{setselectedSize(size)}} />
                        }
                        <label htmlFor={`size_${size}`} className='size'>{size}</label>
                    </>
                ))}
            </div>
            <div className="save_btn" onClick={() => { handleEdit(modalOpen.id, selectedSize, modalOpen.size, modalOpen.quantity) }}>
                Apply
            </div>
        </div>
    )
}

export default SizeEditModal;