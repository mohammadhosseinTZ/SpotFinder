import Data from "./Data"

const fetchData = async()=>{
    const res = await fetch("http://localhost:3000/api/places/limit" , {cache:"no-store"})
    if(!res.ok)return
    return await res.json()
}

async function Places_limit() {
    const limit =await fetchData()
  return (
    <Data data={limit}/>
  )
}

export default Places_limit