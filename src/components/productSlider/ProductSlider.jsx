import { useEffect, useState } from 'react';
import './ProductSlider.css';
import ProductCard from '../productCard/ProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { products } from '../../utils/constants/products';
import { filterByCat } from '../../utils/filterByCat';

const ProductSlider = ({ slider_title, id }) => {
    const slider = document.getElementById(id + "_products");
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        setFilteredProducts(filterByCat(products, id));
        if (slider) {
            slider.scrollLeft = 0;
        }
    }, [id, slider]);


    const handlePrevBtn = () => {
        const slider = document.getElementById(id + "_products");
        const width = document.querySelector('.product_card').clientWidth;
        slider.scrollLeft = slider.scrollLeft - width;
    }
    const handleNextBtn = () => {
        const slider = document.getElementById(id + "_products");
        const width = document.querySelector('.product_card').clientWidth;
        slider.scrollLeft = slider.scrollLeft + width;
    }
    return (
        <div className="product_slider">
            <div className="prev_btn" onClick={() => { handlePrevBtn() }}>
                <FontAwesomeIcon icon="fa-solid fa-circle-chevron-left" />
            </div>
            <div className="next_btn">
                <FontAwesomeIcon icon="fa-solid fa-circle-chevron-right" onClick={() => { handleNextBtn() }} />
            </div>
            <div className="container">
                <p className="slider_title">{slider_title}</p>
                <div className="slider">
                    <div className="products" id={id + "_products"}>
                        {filteredProducts.map(product => (
                            <ProductCard id={product._id} title={product.name} price={product.price} image={product.imgUrl} />
                        ))}


                        <div className="explore_card">
                            <div className="explore_content">
                                <p className="explore_title">Want to see more?</p>
                                <div className="explore_actions">
                                    <a href="/products/">
                                        <div className="explore_btn">
                                            Explore
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSlider;