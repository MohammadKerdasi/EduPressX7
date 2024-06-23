
import "./../index.css"
import FeaturedCoursesCards from '../Components/FeaturedCoursesCards/FeaturedCorsesCards'
import HomePageHero from '../Components/HomePageHero/HomePageHero'

export default function Home() {
  return (
    <>
    <div>
      <HomePageHero />
      <FeaturedCoursesCards />
    </div>
    </>
  )
}
