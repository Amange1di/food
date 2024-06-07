import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroBg from "../assets/hero.png";

const Hero = (props) => {
    const { toggleModal } = props;
    const navigate = useNavigate();

    const handleExploreMenu = () => {
        navigate("/menu");
    };

    return (
        <div style={{ background: `url(${HeroBg}) no-repeat center/cover` }}>
            <div className="container hero">
                <h1 className="title">Best food for your taste</h1>
                <p className="desc">Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
                <div className="hero-btn">
                    <button onClick={() => { console.log("Book A Table clicked"); toggleModal(); }} className="btn brown-btn">Book A Table</button>
                    <button onClick={handleExploreMenu} className="btn">Explore Menu</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;

