import ButtonBack from "@/app/components/country/ButtonBack"

import styles from "./styles.module.css"
import  Hero  from "@/app/components/country/Hero"

interface TCountry{
    country : string
    address:string
}
interface TPlaces{
    _id:string
    title:string
    tags:string
    country:string
    image:string
    description:string
}
async function Country({ params }: { params: {country: string, id: string } }) {
    
    const country = params.country
    const id = params.id

    const fetchCountry = async () => {
        const res = await fetch(`http://localhost:3000/api/countries/${id}`, {cache:"no-store"})
        if(!res.ok) return
        return res.json()
    }
    const fetchPlaces = async () => {
        const res = await fetch(`http://localhost:3000/api/places/${country}`, {cache:"no-store"})
        if(!res.ok) return
        return res.json()
    }

    const country_fetch:TCountry = await fetchCountry()
    const places_fetch:TPlaces[] = await fetchPlaces()
    
    return (
        <div>
 
            <ButtonBack title="BLACK" />
            <Hero
             country_fetch={country_fetch} 
            places_fetch={places_fetch}/>
        </div>


    )
}

export default Country