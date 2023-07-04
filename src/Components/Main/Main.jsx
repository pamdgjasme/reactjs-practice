import React, { useEffect } from 'react'
import './main.css'
import img1 from '../../Assets/img1.jpeg'
import img2 from '../../Assets/img2.jpeg'
import img3 from '../../Assets/img3.jpeg'
import img4 from '../../Assets/img4.jpeg'
import img5 from '../../Assets/img5.jpeg'
import img6 from '../../Assets/img6.jpeg'
import img7 from '../../Assets/img7.jpeg'
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Santorini, Greece",
    location: "Santorini, Greece",
    grade: "CULTURAL RELAX ",
    fees: "$100",
    description: "Discover the stunning beauty of Santorini, Greece with its picturesque white-washed buildings and breathtaking views of the Aegean Sea."
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Bora Bora, French Polynesia",
    location: "Bora Bora, French Polynesia",
    grade: "CULTURAL RELAX ",
    fees: "$150",
    description: "Escape to the tropical paradise of Bora Bora, French Polynesia, where you can relax on pristine beaches and explore the vibrant coral reefs."
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Kyoto, Japan",
    location: "Kyoto, Japan",
    grade: "CULTURAL RELAX ",
    fees: "$200",
    description: "Immerse yourself in the rich culture and history of Kyoto, Japan. Visit ancient temples, participate in traditional tea ceremonies, and admire the beauty of cherry blossoms."
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "New York City, USA",
    location: "New York City, USA",
    grade: "CULTURAL RELAX ",
    fees: "$180",
    description: "Experience the vibrant energy of New York City, USA. Explore iconic landmarks such as Times Square, Statue of Liberty, and Central Park."
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Machu Picchu, Peru",
    location: "Machu Picchu, Peru",
    grade: "CULTURAL RELAX ",
    fees: "$250",
    description: "Journey to the ancient Incan citadel of Machu Picchu, Peru. Hike through breathtaking mountain landscapes and witness the architectural marvels of the past."
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Paris, France",
    location: "Paris, France",
    grade: "CULTURAL RELAX ",
    fees: "$220",
    description: "Experience the romance and charm of Paris, France. Visit the Eiffel Tower, explore the Louvre Museum, and indulge in delicious French cuisine."
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Cape Town, South Africa",
    location: "Cape Town, South Africa",
    grade: "CULTURAL RELAX ",
    fees: "$180",
    description: "Explore the diverse beauty of Cape Town, South Africa. Discover stunning beaches, hike Table Mountain, and visit the vibrant V&A Waterfront."
  },
  // Add more destinations here as needed
];

const Main = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most visited destinations</h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return(
              <div data-aos="fade-up" key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">DETAILS<HiOutlineClipboardCheck className='icon'/></button>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main