import React from 'react';
import { stats } from '../constant';
import styles from '../style';



export default function Stats() {
    return (
        <section className={`${styles.flexCenter} flex-row flex flex-wrap sm:mb-20 mb-6`}>

            {stats.map((stat) => (
                <div key={stat.id}
                    className={`flex flex-1 items-center justify-start m-3`}>
                    <h2 className='text-white font-poppins xs:text-[40px] text-30px
                    font-semibold xs:leading-[53px] leading-[43px]'>{stat.value}</h2>
                    <p className='text-white font-poppins xs:text-[20px] text-150px
                    font-normal xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>{stat.title}</p>
                </div>
            ))}

        </section>
    )
}
