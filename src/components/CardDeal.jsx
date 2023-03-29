import React from 'react';
import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

export default function CardDeal() {
    return (
        <section className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={`text-white font-semibold ${styles.heading2}`}>Find a better card deal <br
                    className='sm:block hidden' />
                    in few easy steps.</h2>

                <p className={`max-w-[470px] text-white ${styles.paragraph}`}>
                    Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Exercitationem rem voluptatum ratione
                    minima excepturi at sint eius minus, iste dolore voluptas
                    alias molestiae hic velit. Quia ullam vel vitae quasi.
                </p>

                <Button
                    styles='mt-10' />
            </div>

            <div className={layout.sectionImg}>
                <img src={card} alt="card"
                    className='w-[100%] h-[100%]' />
            </div>
        </ section>
    )
}
