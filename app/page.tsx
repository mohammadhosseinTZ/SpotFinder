import { Hero, Places } from "./components"
interface Props {
  searchParams?: {
    keywords?: string | string[];
    checked?: string | string[];
    continent?: string | string[];
  };
}
async function HOME({ searchParams }: Props) {
  const continent = searchParams?.continent;
  const continentArray = Array.isArray(continent)
  ? continent
  : continent
  ? [continent]
  : [];

  const checkedRaw = searchParams?.checked;
  const checkedArray = Array.isArray(checkedRaw)
    ? checkedRaw
    : checkedRaw
    ? [checkedRaw]
    : [];

  return (
    
    <div>
      <Hero/>
      <Places keywords={typeof searchParams?.keywords === 'string' ? searchParams?.keywords : ''}
       check={checkedArray} 
       continent={continentArray}
       />
    </div>
  )
}

export default HOME