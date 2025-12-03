import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCard from '../../components/TitleCard/TitleCard'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
          <p>When a quiet town is shattered by a series of whispers and forgotten memories, one woman journeys through echoes of the past, searching for mercy, meaning, and the courage to confront a destiny she never chose.</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon}/>Play</button>
            <button className='btn dark-btn'><img src={info_icon }/>More Info</button>
          </div>
          <TitleCard/>
        </div>
      </div>
      <div className="more-cards">
      <TitleCard title={"Blockbuster Movies"} category={"top_rated"}/>
      <TitleCard title={"Only on Netflix"} category={"popular"}/>
      <TitleCard title={"Upcomming"} category={"upcoming"}/>
      <TitleCard title={"Top picks for you"} category={"now_playing"}/>
      </div>

      <Footer/>
    </div>
  )
}

export default Home
