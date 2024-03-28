import React from 'react';
import styles from './footer.module.css'
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
        <div>©2023 ZamanBlog. All rights reserved.</div>
        <div className={styles.social}>
          <Image src="/1.png" alt='img1' className={styles.icon} width={20} height={20}/>
          <Image src="/2.png" alt='img1' className={styles.icon} width={20} height={20}/>
          <Image src="/3.png" alt='img1' className={styles.icon} width={20} height={20}/>
          <Image src="/4.png" alt='img1' className={styles.icon} width={20} height={20}/>
          
        </div>
    </div>
  )
}

export default Footer