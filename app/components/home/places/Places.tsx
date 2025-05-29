import Places_limit from "./Places_limit"
import Places_noLimit from "./Places_noLimit"
import styles from "./styles.module.css"
function Places() {
  return (
    <div className={styles.home_places_container}>
        <div className="mot-container">
            <div className={styles.home_places_wrapper}>
                <Places_limit/>
                <Places_noLimit/>
            </div>
            <nav></nav>
        </div>
    </div>
  )
}

export default Places