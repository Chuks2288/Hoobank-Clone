import React from 'react';
import Button from './Button';
import styles from '../style';

export default function Cta() {
    return (
        <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} 
        sm:flex-row flex-col bg-black-gradient-2 rounded-[20px]`}>
            <div className='flex flex-1 flex-col'>
                <h2 className={styles.heading2}>Let's try our service now!</h2>
                <p className={`max-w-[470px] ${styles.paragraph} mt-5`}>Everything you need to accept card payments
                    and grow your business anywhere
                    on the planet.
                </p>
            </div>
            <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
                <Button />
            </div>

        </section >
    )
}