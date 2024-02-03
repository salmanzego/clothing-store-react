import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="wrapper">{children}</div>
            <Footer />
        </>
    )
}

export default Layout;