import { useEffect, useState, createContext, useContext } from "react";

import { getCart } from "../utils/getCart";
import { changeQuantity } from "../utils/changeQuantity";
import { deleteFromCart } from "../utils/deleteFromCart";
import { editCart } from "../utils/editCart";
import { UserContext } from "./UserProvider";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({ products: [] });
    const { user } = useContext(UserContext);
    const [modalOpen, setModalOpen] = useState({ open: false, id: "", size: "", quantity: "" });
    useEffect(() => {
        if (user) {
            console.log("from provider");
            getCart().then(data => {
                setCart(data);
                console.log("cart updated");
            });
        }
    }, [modalOpen, user]);



    const handleCount = (id, add, quant, size) => {
        const item = cart.products.find(product => product._id === id && product.size === size);
        const index = cart.products.findIndex(product => product._id === id)
        let newCartItems;
        if (item.quantity === 1 && add === -1) {
            newCartItems = cart.products.filter(product => product._id !== id && product.size !== size);
        } else {
            item.quantity = item.quantity + add;
            cart.products.splice(index, 1, item);
            newCartItems = cart.products;
        }
        changeQuantity(id, add, quant, size).then(res => {
            setCart({ ...cart, products: newCartItems });
        }).catch(err => {
            console.log(err);
        })
    }

    const handleDelete = (id) => {
        const newCartItems = cart.products.filter(product => product._id !== id);
        deleteFromCart(id).then(res => {
            setCart({ ...cart, products: newCartItems });
        })
    }

    const handleModal = (id, size, quantity) => {
        setModalOpen({ open: !modalOpen.open, id: id, size: size, quantity: quantity });
    }

    const handleEdit = (id, selectedSize, prevSize, prevQuant) => {
        editCart(id, selectedSize, prevSize, prevQuant).then(res => {
            setModalOpen({ open: !modalOpen.open, id: "", size: "", quantity: "" });
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }

    //console.log("CartContext Rendered", cart?.products[0]?.size);

    return (
        <CartContext.Provider value={{ cart, handleCount, handleDelete, setCart, handleModal, setModalOpen, modalOpen, handleEdit }}>
            {children}
        </CartContext.Provider>
    )

}
