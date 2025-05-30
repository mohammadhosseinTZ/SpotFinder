
import styles from "./styles.module.css"
import Item from "./Item"

const fetchData = async () => {
  const res = await fetch("http://localhost:3000/api/places", { cache: "no-store" })
  if (!res.ok) return
  const data = await res.json()
  const result = data.map((tag: { tags: string }, i: number) => JSON.parse(tag.tags.replace(/'/g, '"')))
  return [...new Set(result.flat())]

}
async function Checkbox() {
  const tags = await fetchData() as string[]


  return (
    <div className={styles.checkbox_wrapper}>
      <h3>Tags</h3>
  
        {tags &&
          tags?.map((tag: string, i: number) => (
            <Item tag={tag} i={i} key={i}/>
          ))
        }
   
    </div>
  )
}

export default Checkbox