import { useState } from "react";
import Layout from "../../layouts/Layout"
import './ShopPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBar from "../../components/searchBar/SearchBar";
import ProductCard from "../../components/productCard/ProductCard";
import ProductFilter from "../../components/productFilter/ProductFilter";
import tees from '../../assets/images/black_tees.jpg';
import { products } from "../../utils/constants/products";

const ShopPage = () => {
    const [query, setQuery] = useState('');
    const [filterOpen, setFilterOpen] = useState(false);
    const handleFilterOpen = () => {
        setFilterOpen(!filterOpen);
    }

    const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()));
    console.log(filteredProducts);
    return (
        <Layout>
            <div className="shop_wrapper">
                <div className="tool_panel">
                    <div className="row">
                        <div className="col-3 d-flex justify-content-center align-items-center">
                            <div className="filter_btn" onClick={() => { handleFilterOpen() }}>
                                <FontAwesomeIcon icon="fa-solid fa-filter" size='lg' />
                            </div>
                        </div>
                        <div className="col-9 d-flex justify-content-center align-items-center">
                            <SearchBar query={query} setQuery={setQuery} />
                        </div>
                    </div>
                </div>
                <div className="container my-5">
                    <div className="shop_products">
                        <div className="row">
                            {filteredProducts.map(product => (
                                <div className="col-lg-4 col-md-6 col-12 my-3 d-flex justify-content-center">
                                    <ProductCard id={product._id} title={product.name} price={product.price} image={product.imgUrl} />
                                </div>
                            ))}
                            { filteredProducts.length === 0 &&
                                <h2 className="text-center pt-5">No Products Found</h2>
                            }
                        </div>
                    </div>
                </div>
                <ProductFilter filterOpen={filterOpen} handleFilterOpen={handleFilterOpen} />
            </div>
        </Layout>
    )
}

export default ShopPage;