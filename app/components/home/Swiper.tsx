'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';
import Image from 'next/image';
import styles from "./styles.module.css"
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';


interface TCountry {
    "country": string;
    "address": string
}
export default function SwiperHero({ countries }: { countries: TCountry[] | [] }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {

        setMounted(true);
    }, []);
    if (!mounted) return null;
    return (
        <div className={styles.swiper_container}>
            <Swiper
                modules={[Navigation]}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}

                spaceBetween={10}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 3.5,
                        spaceBetween: 10,
                    },
                }}
            >

                {countries && countries?.map((country: TCountry, i: number) => (
                    <SwiperSlide key={i}>
                        <Link href={"/countries/" + country.country} >
                            <div className={styles.image_wrapper}>
                                <Image src={country.address} alt={country.country} layout='fill' objectFit="cover" />
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
                <div className={styles.swiper_navigation_wrapper}>
                    <div className={`swiper-button-prev`}><Image alt='next' src={"/images/next.png"} width={45} height={45} className={styles.swiper_prev} /></div>
                    <div className={styles.hr}></div>
                    <div className="swiper-button-next"><Image alt='next' src={"/images/next.png"} width={45} height={45} /></div>
                </div>
            </Swiper>
        </div>
    );
}
