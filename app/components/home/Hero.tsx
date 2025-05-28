
import { lazy, Suspense } from "react"
import Header from "./Header"
import styles from "./styles.module.css"
import SwiperHero from "./Swiper"

async function fetchData() {
  const res = await fetch("http://localhost:3000/api/countries" , 
    {next:{revalidate:3600}})
  if (!res.ok) return
  const data = await res.json()
  return data
}

async function Hero() {
   const countries =await fetchData()
  return (
    <div className={styles.hero_wrapper}>
      <Header />
      <div className={`mot-container ${styles.hero_content}`}>
        <div className={styles.hero_body}>
          <h1>Discover Breathtaking Destinations</h1>
          <p>
            Explore stunning places across Iran and the world. Find your next adventure with personalized filters and curated travel spots.

          </p>
        </div>

          <SwiperHero countries={countries}/>
      </div>
    </div>
  )
}

export default Hero