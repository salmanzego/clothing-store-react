import Layout from '../layouts/Layout';
import ProductFilter from '../components/productFilter/ProductFilter';
import ProductCard from '../components/productCard/ProductCard';
import tees from '../assets/images/black_tees.jpg';
import SearchBar from '../components/searchBar/SearchBar';
import ProductSlider from '../components/productSlider/ProductSlider';
const Test = () => {
    return (
        <>
            <Layout>
                <SearchBar />
                <ProductSlider slider_title="Bestselling Products." id="tees" />

                <div className="row d-flex">
                    <ProductFilter />
                    <div className="product_list col-md-10 col-12 p-3">
                        <div className="row justify-content-center">
                            <div className="col-lg-3 col-md-4 col-6 m-2">
                                <ProductCard id="45fr5790kjhgf" title="Black Vintage Tees" price="15" image={tees} />
                            </div>
                            <div className="col-lg-3 col-md-4 col-6 m-2">
                                <ProductCard id="45fr5790kjhgf" title="Black Vintage Tees" price="15" image={tees} />
                            </div>
                            <div className="col-lg-3 col-md-4 col-6 m-2">
                                <ProductCard id="45fr5790kjhgf" title="Black Vintage Tees" price="15" image={tees} />
                            </div>
                            <div className="col-lg-3 col-md-4 col-6 m-2">
                                <ProductCard id="45fr5790kjhgf" title="Black Vintage Tees" price="15" image={tees} />
                            </div>
                            <div className="col-lg-3 col-md-4 col-6 m-2">
                                <ProductCard id="45fr5790kjhgf" title="Black Vintage Tees" price="15" image={tees} />
                            </div>
                            <div className="col-lg-3 col-md-4 col-6 m-2">
                                <ProductCard id="45fr5790kjhgf" title="Black Vintage Tees" price="15" image={tees} />
                            </div>
                            <div className="col-lg-3 col-md-4 col-6 m-2">
                                <ProductCard id="45fr5790kjhgf" title="Black Vintage Tees" price="15" image={tees} />
                            </div>
                            <div className="col-lg-3 col-md-4 col-6 m-2">
                                <ProductCard id="45fr5790kjhgf" title="Black Vintage Tees" price="15" image={tees} />
                            </div>


                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Test;