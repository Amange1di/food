import React from 'react';

import Shaurma from "../assets/image 111.png";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";

const HomeAddress = () => {
    return (
        <div className="address-bg">
            <div className="container h-address">
                <div className="address-img">
                    <img width={600} height={566} src={Shaurma} alt="" />
                    <div className="address-block">
                        <h4>Come and visit us</h4>
                        <div><FiPhone className="icons" /> (414) 857 - 0107</div>
                        <div><HiOutlineMail className="icons" /> yummy@bistrobliss</div>
                        <div><GrLocation className="icons"/>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</div>
                    </div>
                </div>
                
                <div className="address-text">
                    <h2 className="h2-title">We provide healthy <br /> food for your family.</h2>
                    <p className="desc">
                        <strong>
                        Our story began with a vision to create a unique dining <br /> experience that merges fine dining, exceptional service, and a <br /> vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.
                        </strong>
                    </p>
                    <p className="desc">
                        At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
                    </p>
                    
                </div>
            </div>
        </div>
    );
}

export default HomeAddress;
