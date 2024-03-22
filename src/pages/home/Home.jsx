import Header from "../../components/header/Header";
import ProductSlider from "../../components/productSlider/ProductSlider";
import Banner from "../../components/banner/Banner";
import hoodie_banner from '../../assets/images/banner1.jpg'


const Home = () => {
    return (
        <>
            <Header />
            <ProductSlider slider_title="Bestselling Products." id="bestselling"/>
            <Banner title="Flat 30% Discount on Hoodies." btn_txt="Grab it now!" btn_url="/products/hoodies" banner_img={hoodie_banner}/>
            <ProductSlider slider_title="Hoodies." id="hoodies"/>
            <ProductSlider slider_title="Sweaters." id="sweaters"/>
            <ProductSlider slider_title="Pants." id="pants"/>
        </>
    )
}

export default Home;