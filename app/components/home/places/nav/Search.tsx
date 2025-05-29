import Button from "@/app/components/button/Button"
import styles from "./styles.module.css"
function Search() {
    return (
        <form className={styles.search}>
            <input type="text" />
            <Button title="search"/>
        </form>
    )
}

export default Search