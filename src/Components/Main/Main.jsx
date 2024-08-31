import React,{useEffect} from 'react'
import './main.css'

import {HiOutlineClipboardCheck, HiOutlineLocationMarker} from 'react-icons/hi'

import tajMahal from '../../Assets/tajMahal.jpg'
import coorg from '../../Assets/coorg.jpg'
import maldives from '../../Assets/maldives.jpg'
import phuket from '../../Assets/phuket.jpg'
import newYorkCity from '../../Assets/newYorkCity.jpg'
import bali from '../../Assets/bali.jpg'
import costaRica from '../../Assets/costaRica.jpg'
import sanFrancisco from '../../Assets/sanFrancisco.jpg'
import santorini from '../../Assets/santorini.jpg'
import sydney from '../../Assets/sydney.jpg'




import Aos from 'aos'
import 'aos/dist/aos.css'

const Data=[ 
  {
    id:0,
    imgSrc:maldives,
    destTitle:'Maldives',
    location:'India',
    grade:'Islands',
    fees:'$700',
    description:"The Maldives is an archipelagic state situated in the Indian Ocean known for its luxurious water villas. A tropical haven of white sand beaches, the Maldives is located in the south of Sri Lanka and is ideal for an adventure, honeymoon, or leisure holiday.The Maldives is an archipelagic state situated in the Indian Ocean known for its luxurious water villas.",

  },{
    id:1,
    imgSrc:phuket,
    destTitle:'Phuket',
    location:'Thailand',
    grade:'Cultural RELAX',
    fees:'$850',
    description:"The largest Island in all of Thailand, Phuket has everything Thailand has to offer. It is located in southern Thailand, on the Andaman sea coastline. Serviced by the Phuket International Airport, the island sees no dearth of travellers at any time of the year. Golden beaches, numerous offshore islands, upbeat markets, a high-octane nightlife and thrilling watersports characterise Phuket in a nutshell.",

  }, {
    id:2,
    imgSrc:newYorkCity,
    destTitle:'New York City',
    location:'New York',
    grade:'Cultural RELAX',
    fees:'$700',
    description:"An iconic global centre that has inspired the world with its brilliant architecture, movies, and art. Also known as the Big Apple, New York is well-known for its magnificent skyscrapers, Broadway shows and beautiful landmarks, making it the perfect destination for travellers from all over.",

  }, {
    id:3,
    imgSrc:tajMahal,
    destTitle:'Taj Mahal',
    location:'India',
    grade:'Cultural RELAX',
    fees:'$200',
    description:"An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife, the Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage.",

  },
  {
    id:4,
    imgSrc:bali,
    destTitle:'Bali',
    location:'Indonesia',
    grade:'Island',
    fees:'$500',
    description:"Bali, Indonesia’s most famous island, is located to the west of Java in the Lesser Sunda Islands. It is world-renowned for its scenic rice terraces, fragrant cuisine, stunning beaches and a galore of culture and tradition. With its elaborate temples, endless coastline, some of the world's best coral reefs, waterfalls and retreats, Bali combines leisure and adventure impeccably.",

  },
  {
    id:5,
    imgSrc:costaRica,
    destTitle:'Costa Rica',
    location:'North America',
    grade:'Cultural RELAX',
    fees:'$750',
    description:"Costa Rica, a Catholic country in Central America, shares its borders with Nicaragua and Panama. It has the Pacific Ocean to the west and Carribean Coast to the East. Costa Ricans or the people living in the country are called Ticos. The country is known for a variety of wildlife, distinct culture and plethora of adventure activities.",

  },
  {
    id:6,
    imgSrc:sanFrancisco,
    destTitle:'San Francisco',
    location:'California',
    grade:'Cultural RELAX',
    fees:'$650',
    description:"San Francisco is one of the most important cities on the West Coast and all of the United States. It has been a major tourist destination since the 1960s, thanks to its wide array of attractions, the iconic Golden Gate Bridge fantastic views of the San Francisco Bay and brilliant summer weather.",

  },
  {
    id:7,
    imgSrc:santorini,
    destTitle:'Santorini',
    location:'Greece',
    grade:'Cultural RELAX',
    fees:'$1050',
    description:"Santorini Is one of the most spectacular islands in Greece. It is a part of the Cyclades islands and sits in the Aegean Sea, halfway between Athens and Crete. The crescent-shaped island is famous for its iconic white houses, blue dome churches and windmills. It is the most photographed island in the world. The highlights of Santorini are its hikes, beaches, sunset views, hot springs and clifftop wineries.",

  },
  {
    id:8,
    imgSrc:sydney,
    destTitle:'Sydney',
    location:'Australia',
    grade:'Cultural RELAX',
    fees:'$950',
    description:"Sydney is Australia's largest city and its most iconic tourist destination. Home to the iconic Sydney Opera House and Sydney Harbour Bridge, this city is a mix of the country's best beaches, coastal and hilly hikes, modern art galleries, affluent shopping and lavish fine dining. Australia has fast evolved as a melting pot of cultures from across the world.",

  },
  {
    id:9,
    imgSrc:coorg,
    destTitle:'Coorg',
    location:'India',
    grade:'Nature',
    fees:'$560',
    description:"Located amidst imposing mountains in Karnataka with a perpetually misty landscape, Coorg is a popular coffee producing hill station. It is popular for its beautiful green hills and the streams cutting right through them. It also stands as a popular destination because of its culture and people. The Kodavas, a local clan specializing in martial arts, are especially notable for their keen hospitality.",

  }, 

]


const Main = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])


  return (
  <section className='main container section'>
    <div className="secTitle">
      <div  data-aos='fade-right' className="title">
        Most visited destinations
      </div>
    </div>

    <div className="seeContent grid">

      {Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
        return(
          <div key={id} data-aos='fade-up' className='singleDestination'>

            <div className="imageDiv">
              <img src={imgSrc} alt={destTitle}/>
            </div>

            <div className="cardInfo">
              <h4 className="destTitle">
                {destTitle}
              </h4>
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

              <button className="btn flex">
                DETAILS<HiOutlineClipboardCheck className='icon'/>
              </button>

            </div>

          </div>
        )
      })}

    </div>
  </section>


  )
}

export default Main