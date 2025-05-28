import Link from "next/link"
import styles from "./styles.module.css"
function Header() {
  return (
    <div className={`mot-container ${styles.header_wrapper}`}>
      <div className={styles.header_tag}>
        <h5 >Places List</h5>
      </div>
      <div className={styles.header_links}>
        <ul>
          <li><Link href={"/"}>HOME</Link></li>
          <li><Link href={"/"}>ABOUT US</Link></li>
          <li><Link href={"/"}>CONTACT US</Link></li>
          <li><Link href={"/"}>BLOGS</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header