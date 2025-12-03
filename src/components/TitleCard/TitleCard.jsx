import React, {useEffect, useRef, useState} from 'react'
import './TitleCard.css'
import { Link } from 'react-router-dom'
// import cards_data from '../../assets/cards/Cards_data'



const TitleCard = ({title, category}) => {
  const [apiData, setApiData] = useState([])
  const cardsRef = useRef()
  const handleWheel = (event) => {
    event.preventDefault()
    cardsRef.current.scrollLeft += event.deltaY;
  }

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzVkODNmZTU4NGEyNmFhYTBmOWU1YmRiNGUyNzBlNSIsIm5iZiI6MTc2NDcyNDQxNS42ODIsInN1YiI6IjY5MmY4ZWJmMjExODE5OTk0ODYzNTkxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NNFIuQdTZOnoqHXPl1AwyRsjun4mERNB4SR2X5KntcM'
    }
  };
  
  useEffect(() =>{
    fetch(`https://api.themoviedb.org/3/movie/${category ?category : 'now_playing'}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results ))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel)
  },[])
  return (
    <div className='title-cards'>
      <h2>{title ? title: "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt="" />
              <p>{card.original_title}</p>
            </Link>
          )
        } )}
      </div>
    </div>
  )
}

export default TitleCard
