import Image from "next/image"
import styles from "./styles.module.css"

interface TCountry {
    country: string
    address: string
}
interface TPlaces {
    _id: string
    title: string
    image: string
    tags: string
    country: string
    description: string
}
function Hero(
    { country_fetch, places_fetch }:
        { country_fetch: TCountry, places_fetch: TPlaces[] }) {
    const toArray = async function (str: string) {
        const to_array: string[] = JSON.parse(str.replace(/'/g, '"'))
        return to_array.map((el: string, i: number) => <span key={i}>{el}</span>)
    }

    return (
        <div className={styles.hero_wrapper}>

            <div className={styles.img_wrapper} style={{ backgroundImage: `url(${country_fetch.address})` }}>
                <div className={styles.filter}></div>
                <h5>{country_fetch.country}</h5>

                <div className={styles.places_container}>
                    {places_fetch && places_fetch.map((el, i) => (
                        <div key={i} className={styles.places_wrapper}>
                            <div className={styles.image_wrapper}>
                                <Image src={el.image} alt={el.title} fill />
                            </div>
                            <p className={styles.places_title}>{el.title}</p>
                            <div className={styles.tags}>
                                {toArray(el.tags)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>




        </div>
    )
}

export default Hero