import './ProductFilter.css'
import RangeSlider from '../priceSlider/PriceSlider';


const ProductFilter = ({ filterOpen, handleFilterOpen }) => {
    return (
        <div className={filterOpen ? "product_filter open d-flex flex-column align-items-center" : "product_filter d-flex flex-column align-items-center"}>
            <div>
                <div className="categories">
                    <p className="cat_title">Category</p>
                    <div className="cat_select">
                        <ul>
                            <li><input type="checkbox" name="" id="" /> <label htmlFor="">Tees</label></li>
                            <li><input type="checkbox" name="" id="" /> <label htmlFor="">Hoodies</label></li>
                            <li><input type="checkbox" name="" id="" /> <label htmlFor="">Sweaters</label></li>
                            <li><input type="checkbox" name="" id="" /> <label htmlFor="">Pants</label></li>
                        </ul>
                    </div>
                </div>
                <div className="price_range">
                    <p className="range_title">Price</p>
                    <div className="range_select ps-2">
                        <RangeSlider />
                    </div>
                </div>
                <div className="other_filters mt-3">
                    <div className="filters">
                        <ul>
                            <li><input type="checkbox" name="" id="" /> <label htmlFor="">Available</label></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="d-flex filter_btns">
                <div className="close_btn mt-3">
                    Apply
                </div>
                <div className="close_btn mt-3 ms-3" onClick={handleFilterOpen}>
                    Close
                </div>
            </div>


        </div>
    )
}

export default ProductFilter;