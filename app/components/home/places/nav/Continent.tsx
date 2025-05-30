import ContinentItem from "./ContinentItem"
import styles from "./styles.module.css"
const fetchData = async ()=>{
    const res = await fetch("http://localhost:3000/api/places" , {cache:"no-store"})
    if(!res.ok) return
    const data = await res.json()
    const result = data.map((continent:{continent:string} , i:number) => continent.continent)
    return [...new Set(result.flat())]
    
}
async function Continent() {
    const continents = await fetchData() as string[]

    
  return (
    <div className={styles.continent_wrapper}>
          <h3>Continents</h3>
        {   continents &&
           continents?.map((continent:string , i:number) => (
              <ContinentItem continent={continent} i={i} key={i}/>
           )) 
        }
    </div>
  )
}

export default Continent