import { useState, useEffect, useContext } from "react";
import './ShopPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBar from "../../components/searchBar/SearchBar";
import ProductCard from "../../components/productCard/ProductCard";
import ProductFilter from "../../components/productFilter/ProductFilter";
import { products } from "../../utils/constants/products";
import { getAllProducts } from "../../utils/getAllProducts";
import { CartContext } from '../../context/CartProvider';
import AddCartModal from "../../components/addCartModal/AddCartModal";


const ShopPage = () => {
    const [state, setState] = useState({ query: '', categories: [], priceRange: [0, 2000], available: false });
    const [filtered, setFiltered] = useState([]);
    const [filterOpen, setFilterOpen] = useState(false);

    const { modalOpen } = useContext(CartContext);


    const handleFilterOpen = () => {
        setFilterOpen(!filterOpen);
    }

    useEffect(() => {
        getAllProducts().then(data => {
            setFiltered(data);
        })

        if (state.categories.length > 0) {
            setFiltered(products.filter(product => (state.available ? product.stock > 0 : product)
                && product.name.toLowerCase().includes(state.query.toLowerCase())
                && state.categories.includes(product.category)
                && (product.price > state.priceRange[0] && product.price < state.priceRange[1])));
        } else {
            setFiltered(products.filter(product => (state.available ? product.stock > 0 : product)
                && product.name.toLowerCase().includes(state.query.toLowerCase())
                && (product.price > state.priceRange[0] && product.price < state.priceRange[1])));
        }
    }, [state]);

    const handleFilterApply = (event, rangeValue) => {
        const categoryBoxes = document.getElementsByName("categories");
        const categories = [];
        const priceRange = rangeValue;
        const available = document.getElementsByName("available")[0].checked;
        for (let i = 0; i < categoryBoxes.length; i++) {
            if (categoryBoxes[i].checked && !categories.includes(categoryBoxes[i].id)) {
                categories.push(categoryBoxes[i].id);
            }
        }
        setState((prevState) => { return { ...prevState, categories: categories, priceRange: priceRange, available: available } });
    }

    return (
        <>
            <div className="shop_wrapper">
                <div className="tool_panel">
                    <div className="row">
                        <div className="col-3 d-flex justify-content-center align-items-center">
                            <div className="filter_btn" onClick={() => { handleFilterOpen() }}>
                                <FontAwesomeIcon icon="fa-solid fa-filter" size='lg' />
                            </div>
                        </div>
                        <div className="col-9 d-flex justify-content-center align-items-center">
                            <SearchBar state={state} setState={setState} />
                        </div>
                    </div>
                </div>
                <div className="container my-5">
                    <div className="shop_products">
                        <div className="row">
                            {filtered.map(product => (
                                <div className="col-lg-4 col-md-6 col-12 my-3 d-flex justify-content-center">
                                    <ProductCard id={product._id} title={product.name} price={product.price} image={product.imgUrl} />
                                </div>
                            ))}
                            {filtered.length === 0 &&
                                <h2 className="text-center pt-5">No Products Found</h2>
                            }
                        </div>
                    </div>
                </div>
                <ProductFilter filterOpen={filterOpen} handleFilterOpen={handleFilterOpen} handleFilterApply={handleFilterApply} />
            </div>

            {modalOpen.open &&
                <AddCartModal />
            }
        </>
    )
}

export default ShopPage;

