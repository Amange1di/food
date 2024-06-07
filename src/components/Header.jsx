

import React from 'react'
import { FiPhone } from "react-icons/fi"
import { HiOutlineMail } from "react-icons/hi"
import { RxTwitterLogo } from "react-icons/rx";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom"
import HeaderImg from "../assets/japanese-food.png"



//<a href=""></a> = <NavLink></NavLink>

const menu = [
    {
        title: "Home",
        link: '/'
    },
    {
        title: "About",
        link: '/about'
    },
    {
        title: "Menu",
        link: '/menu'
    },
    {
        title: "Pages",
        link: '/pages'
    },
    {
        title: "Contact",
        link: '/contact'
    }
]

const Header = (props) => {
    const{toggleModal} = props
    return (
        <div>
            <div className='header-top'>
                <div className='container'>
                    <div className='email-phone'>
                        <div><FiPhone /> (414) 857 - 0107</div>
                        <div><HiOutlineMail /> yummy@bistrobliss</div>
                    </div>
                    <div className='icons'>
                        <div><RxTwitterLogo /> </div>
                        <div> <LuFacebook /> </div>
                        <div> <FaInstagram /> </div>
                        <div> <FaGithub /> </div>
                    </div>
                </div>

            </div>

            <div className='header-bottom'>
                <div className='container'>
                    <div className='logo'>
                        <img src={HeaderImg} alt="" />
                        <p> Bistro Bliss</p>
                    </div>
                    <div className='menu'>
                        {menu.map(({link, title}) => <NavLink to={link}>{title}</NavLink>)}

                    </div>
                    <div className='h-btn'>
                        <button onClick={toggleModal} className='btn'>Book A Table</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header