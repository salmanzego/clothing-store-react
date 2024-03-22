import { useState } from 'react';
import './ProductFilter.css'
import RangeSlider from '../priceSlider/PriceSlider';
import { handleFilterApply } from "../../utils/handleFilterApply";

const ProductFilter = ({ filterOpen, handleFilterOpen, handleFilterApply }) => {
    const [value, setValue] = useState([0, 2000]);


    return (
        <div className={filterOpen ? "product_filter open d-flex flex-column align-items-center" : "product_filter d-flex flex-column align-items-center"}>
            <form onSubmit={e => { e.preventDefault(); handleFilterApply(e, value) }}>
                <div className="categories">
                    <p className="cat_title">Category</p>
                    <div className="cat_select">
                        <ul>
                            <li><input type="checkbox" name="categories" id="tees" /> <label htmlFor="">Tees</label></li>
                            <li><input type="checkbox" name="categories" id="hoodies" /> <label htmlFor="">Hoodies</label></li>
                            <li><input type="checkbox" name="categories" id="sweaters" /> <label htmlFor="">Sweaters</label></li>
                            <li><input type="checkbox" name="categories" id="pants" /> <label htmlFor="">Pants</label></li>
                        </ul>
                    </div>
                </div>
                <div className="price_range">
                    <p className="range_title">Price</p>
                    <div className="range_select ps-2">
                        <RangeSlider value={value} setValue={setValue}/>
                    </div>
                </div>
                <div className="other_filters mt-3">
                    <div className="filters">
                        <ul>
                            <li><input type="checkbox" name="available" id="available" /> <label htmlFor="">Available</label></li>
                        </ul>
                    </div>
                </div>
                <div className="d-flex filter_btns">
                    <button type="submit" className="close_btn mt-3">
                        Apply
                    </button>
                    <div className="close_btn mt-3 ms-3" onClick={handleFilterOpen}>
                        Close
                    </div>
                </div>
            </form>


        </div>
    )
}

export default ProductFilter;