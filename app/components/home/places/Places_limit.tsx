import Data from "./Data"

async function Places_limit({ keywords , check ,continent }: { keywords: string , check:string[] , continent:string[] }) {
    if(keywords == undefined) keywords = ''

    const params = new URLSearchParams();
    params.set('keywords', keywords);
    check.forEach(val => params.append('checked', val));
    continent.forEach(val => params.append('continent', val));
    

  const fetchData = async () => {
    const res = await fetch(`http://localhost:3000/api/places/limit?${params.toString()}`, { cache: "no-store" })
    if (!res.ok) return
    return await res.json()
  }
  const limit = await fetchData()

  
  return (

    <Data data={limit} />

  )
}

export default Places_limit