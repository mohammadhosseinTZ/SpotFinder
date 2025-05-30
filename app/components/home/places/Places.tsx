import Image from "next/image"
import { Checkbox, Search } from "./nav"
import Continent from "./nav/Continent"
import Places_limit from "./Places_limit"
import Places_noLimit from "./Places_noLimit"
import styles from "./styles.module.css"


function Places({ keywords, check, continent }: { keywords: string, check: string[], continent: string[] }) {
  return (

    <div className={`mot-container ${styles.home_places_container}`}>
      <div className={`place_wrapper ${styles.home_places_wrapper}`}>
        {keywords && <p className={styles.search_result}>SEARCH RESULT FOR: {keywords}</p>}
        <Places_limit keywords={keywords} check={check} continent={continent} />
        <div className={styles.banner}>
          <p>YOU CAN FILTER ALL THESE ITEMS.</p>
        </div>
        <Places_noLimit keywords={keywords} check={check} continent={continent} />
        <Image className={`img_result ${styles.img_result}`} src="/images/no-result.jpg" alt="result" fill />
      </div>
      <nav>
        <Search />
        <Checkbox />
        <Continent />
      </nav>
    </div>

  )
}

export default Places