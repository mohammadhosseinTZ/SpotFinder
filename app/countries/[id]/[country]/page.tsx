import ButtonBack from "@/app/components/country/ButtonBack"

import styles from "./styles.module.css"
import  Hero  from "@/app/components/country/Hero"

interface TCountry{
    country : string
    address:string
}
async function Country({ params }: { params: {country: string, id: string } }) {
    
    const country = params.country
    const id = params.id

    const fetchCountry = async () => {
        const res = await fetch(`http://localhost:3000/api/countries/${id}`, {cache:"no-store"})
        if(!res.ok) return
        return res.json()
    }

    const data:TCountry = await fetchCountry()
 
    
    return (
        <div>
 
            <ButtonBack title="BLACK" />
            <Hero data={data}/>
        </div>


    )
}

export default Country