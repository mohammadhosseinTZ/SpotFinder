import styles from "./styles.module.css"

function Button({ title }: { title: string }) {
    return (
        <button className={styles.button}>{title}</button>
    )
}

export default Button