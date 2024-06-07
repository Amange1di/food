import React from 'react'
import { useNavigate } from 'react-router-dom'
import Hero from "../components/Hero"
import HomeMenu from "../components/HomeMenu"
import HomeAddress from '../components/HomeAddress'
import BookATable from '../components/BookATable'
import HomeFour from '../components/HomeFour'
import Otz from '../components/Otz'
import HomeFive from '../components/HomeFive'
import Articles from '../components/Articles'


const Home = () => {
  const navigate = useNavigate()

  const toggleModal = () => {
    console.log("toggleModal called");
    navigate("/book")
  }

  return (
    <div>
      <Hero toggleModal={toggleModal}/>
      <HomeMenu/>
      <HomeAddress/>
      <HomeFour/>
      <HomeFive/>
      <Otz/>
      <Articles/>
     
    </div>
  )
}

export default Home
