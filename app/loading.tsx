import styles from "./styles.module.css"
function loading() {
    return (
        <section className={styles.loading}>
            <div className={styles.banner}>
                <p>LOADING ....</p>
            </div>
        </section>
    )
}

export default loading