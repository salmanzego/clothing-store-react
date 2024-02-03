import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <div className="overlay">
                <div className="container">
                    <div className="header_content">
                        <h1>Go Beyond,<br />Godope.</h1>
                        <p>where streetwear reigns supreme!</p>
                        <a href="/">
                            <div className="header_btn">Go dope!</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;