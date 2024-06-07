
import { Link } from "react-router-dom"
import Cup from "../assets/chawka.svg"
import Dishes from "../assets/222.svg"
import Drinks from "../assets/333.svg"
import Desserts from "../assets/444.svg"

const menuData = [
    {
        img: Cup,
        name: "Breakfast",
        text: "In the new era of technology we look in the future with certainty and pride for our life.",
        link: '/menu'
    },
    {
        img: Dishes,
        name: "Main Dishes",
        text: "In the new era of technology we look in the future with certainty and pride for our life.",
        link: '/menu'
    },
    {
        img: Drinks,
        name: "Drinks",
        text: "In the new era of technology we look in the future with certainty and pride for our life.",
        link: '/menu'
    },
    {
        img: Desserts,
        name: "Desserts",
        text: "In the new era of technology we look in the future with certainty and pride for our life.",
        link: '/menu'
    }
]

const HomeMenu = () => {
    return (
        <div>
            <div className="container home-menu">
                <h2 className="h2-title">Browse Our Menu</h2>
                <div className="menu-cards">
                    {menuData.map((el) => (
                        <div className="card">
                            <div className="img-wrap">
                                <img src={el.img} alt="" />
                            </div>
                            <h3>{el.name}</h3>
                            <p>{el.text}</p>
                            <Link to={el.link}>Explore Menu</Link>
                        </div>
                    ))}


                </div>
            </div>

        </div>
    )
}

export default HomeMenu