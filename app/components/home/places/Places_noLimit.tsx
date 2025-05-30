import Data from "./Data"

async function Places_noLimit({ keywords, check ,continent}: { keywords: string, check: string[] , continent:string[]}) {

  if (keywords == undefined) keywords = ''

  const params = new URLSearchParams();
  params.set('keywords', keywords);
  check.forEach(val => params.append('checked', val));
  continent.forEach(val => params.append('continent', val));

  const fetchData = async () => {
    const res = await fetch(`http://localhost:3000/api/places?${params.toString()}`,
      { cache: "no-store" })
    if (!res.ok) return
    return await res.json()
  }
  const no_limit = await fetchData()



  return (
    <Data data={no_limit} />
  )
}

export default Places_noLimit