import Data from "./Data"

const fetchData = async()=>{
    const res = await fetch("http://localhost:3000/api/places" , {cache:"no-store"})
    if(!res.ok)return
    return await res.json()
}

async function Places_noLimit() {

    const no_limit =await fetchData()

  return (
    <Data data={no_limit}/>
  

  )
}

export default Places_noLimit