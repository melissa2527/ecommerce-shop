import React from 'react';
import Image from 'next/image';
import styles from './Banner.module.scss';

const Banner = () => {
    return (
        <div className={styles.container}>
        <Image className={styles.image} 
            src='/img/banner-backpack.jpg'
            alt='Background Image'
            // layout='fill'
            // layout='responsive'
            objectFit= 'cover'
            height={700}
            width={2000}
            objectPosition = 'center'
        />
        <h1 className={styles.title}>Backpack Shop</h1>
    </div>
    )
}

export default Banner
