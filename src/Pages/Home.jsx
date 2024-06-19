import React from 'react'
import "./../index.css"
import FeaturedCoursesCards from '../Components/FeaturedCoursesCards/FeaturedCorsesCards'
import HomePageHero from '../Components/HomePageHero/HomePageHero'

export default function Home() {
  return (
    <>
    <div className='Project-Container'>
      <HomePageHero />
      <FeaturedCoursesCards />
    </div>
    </>
  )
}
