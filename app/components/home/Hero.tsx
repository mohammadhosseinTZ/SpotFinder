import Header from "./Header"
import styles from "./styles.module.css"
import SwiperHero from "./Swiper"
function Hero() {
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
        <SwiperHero />
      </div>
    </div>
  )
}

export default Hero