"use client"

import { useRouter } from "next/navigation";
import styles from "./styles.module.css"


function ButtonBack({title}: { title : string}) {
const router = useRouter()
  return (
    <button className={styles.prev_button} onClick={()=>router.back()}>{title}</button>
  )
}

export default ButtonBack