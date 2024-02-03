import './ProductCard.css';


const ProductCard = ({ title, price, image, id }) => {
    return (
        <div className="product_card">
            <div className="product_img">
                <img src={image} alt="" />
            </div>
            <div className="product_content">
                <p className="product_title text-center">{title}</p>
                <div className="product_actions">
                    <p className="price">₹{price}</p>
                    <a href={"/product/"+id}>
                        <div className="product_btn">
                            Add to Cart
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;