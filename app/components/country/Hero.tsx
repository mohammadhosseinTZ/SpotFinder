import Image from "next/image"
import styles from "./styles.module.css"

interface TCountry {
    country: string
    address: string
}
function Hero({ data }: { data: TCountry }) {
    console.log(data , "asd");
    return (
        <div className={styles.hero_wrapper}>
            
            <div className={styles.img_wrapper} style={{ backgroundImage:`url(${data.address})`}}>
                <div className={styles.filter}></div>
                <h5>{data.country}</h5>
            </div>

        </div>
    )
}

export default Hero