import './Banner.css'

const Banner = ({title, btn_txt, btn_url, banner_img}) => {
    return (
        <div className="banner">
            <div className="overlay">
                <div className="banner_content">
                    <h2>{title}</h2>
                    <a href={btn_url}><div className="banner_btn">{btn_txt}</div></a>
                </div>
            </div>
        </div>
    )
}

export default Banner;