"use client"
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./styles.module.css"


function Item({ tag, i }: { tag: string, i: number }) {
    const searchParams = useSearchParams()
    const router = useRouter()


    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        let target: string = e.target.value
        const param = new URLSearchParams(searchParams.toString())
        
        if (e.target.checked) {
            param.append('checked', target);
            router.push(`?${param.toString()}`)
        }else{
            const checkedValues = param.getAll('checked');
            const newCheckedValues = checkedValues.filter(v => v !== target);
        
            param.delete('checked');
            newCheckedValues.forEach(v => param.append('checked', v));
        
            router.push(`?${param.toString()}`);
        }

    };
    
    const handleChecked = (tag:string):boolean=>{
        const queries =searchParams.getAll("checked")
        if(queries.includes(tag)) return true
        return false
    }
    return (

        <div className={styles.checkbox}   >
            <input type="checkbox" value={tag} checked={handleChecked(tag)} onChange={handleInput} />
            <label htmlFor="">{tag}</label>
        </div>

    )
}

export default Item