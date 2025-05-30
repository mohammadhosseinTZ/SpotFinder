'use client';

import Button from "@/app/components/button/Button"
import styles from "./styles.module.css"
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';


function Search() {
    const router = useRouter();
    const [search, setSearch] = useState('');
    const searchParam = useSearchParams()
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();


        const query = new URLSearchParams(searchParam.toString());
        query.set('keywords' , search) 
        router.push(`/?${query.toString()}`);
    };
    return (
        <form className={styles.search} onSubmit={handleSubmit}>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <Button title="search" />
        </form>
    )
}

export default Search