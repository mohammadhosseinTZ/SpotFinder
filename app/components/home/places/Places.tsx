import { Checkbox, Search } from "./nav"
import Continent from "./nav/Continent"
import Places_limit from "./Places_limit"
import Places_noLimit from "./Places_noLimit"
import styles from "./styles.module.css"
function Places() {
  return (
   
        <div className={`mot-container ${styles.home_places_container}`}>
            <div className={styles.home_places_wrapper}>
                <Places_limit/>
                <Places_noLimit/>
            </div>
            <nav>
              <Search/>
              <Checkbox/>
              <Continent/>
            </nav>
        </div>
 
  )
}

export default Places