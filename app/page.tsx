import { Hero, Places } from "./components"

async function HOME({ searchParams }: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const continent = searchParams.continent
  const continentArray = Array.isArray(continent)
  ? continent
  : continent
  ? [continent]
  : [];

  const checkedRaw = searchParams.checked;
  const checkedArray = Array.isArray(checkedRaw)
    ? checkedRaw
    : checkedRaw
    ? [checkedRaw]
    : [];

  return (
    
    <div>
      <Hero/>
      <Places keywords={typeof searchParams.keywords === 'string' ? searchParams.keywords : ''}
       check={checkedArray} 
       continent={continentArray}
       />
    </div>
  )
}

export default HOME