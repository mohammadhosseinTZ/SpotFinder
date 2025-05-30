"use client"
import { useRouter, useSearchParams } from "next/navigation"
import styles from "./styles.module.css"
function ContinentItem({ continent, i }: { continent: string, i: number }) {
    const searchParams = useSearchParams()
    const router = useRouter()
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target.value
        const param = new URLSearchParams(searchParams.toString())
        if (e.target.checked) {
            param.append("continent", target);
            router.push(`/?${param.toString()}`)
        } else {
            const all_param = param.getAll("continent");
            const new_param = all_param.filter((el) => el !== target)

            param.delete("continent")
            new_param.forEach(el => param.append("continent", el))
            router.push(`/?${param.toString()}`)
        }

    }
    const handleChecked = (str: string): boolean => {
        const params = searchParams.getAll("continent")
        if (params.includes(str)) return true
        return false
    }
    return (
        <div className={styles.continent} key={i}>
            <input type="checkbox"
                value={continent}
                onChange={handleInput}
                checked={handleChecked(continent)} />
            <label htmlFor="">{continent}</label>
        </div>
    )
}

export default ContinentItem