import Image from 'next/image'
import React from 'react'
import styles from "./styles.module.css"
import Link from 'next/link'
interface TPlace {
    "_id": string
    "title": string
    "image": string
    "continent": string
    "country": string
    "tags": string
    "description": string
}
function Data({ data }: { data: TPlace[] }) {

const toArray = async function (str:string){
    const to_array:string[] =JSON.parse(str.replace(/'/g, '"'))
    return to_array.map((el:string , i:number) => <span key={i}>{el}</span>)
}

    return (
        <div className={styles.item_container}>
            {data && data?.map((place: TPlace, i: number) => (
                <div key={i} className={styles.item_wrapper}>
                    <div className={styles.image_wrapper}>
                        <Link href={"/places/" + place._id}>
                            <Image src={place.image} alt={place.title} fill  loading="lazy"/>
                        </Link>
                        <p className={styles.details}>
                            {place.continent} - {place.country}
                        </p>
                    </div>
                    <Link href={"/places/" + place._id} className={styles.title}>
                        <h3>{place.title}</h3>
                    </Link>
                    <div className={styles.tags}>
                        {toArray(place.tags)}
                    </div>
                    <p className={styles.description}>
                        {place.description}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Data