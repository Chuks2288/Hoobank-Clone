import React from 'react';
import styles from '../style';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constant';

export default function Footer() {
    return (
        <section className={`${styles.flexStart} ${styles.paddingY} flex-col`}>
            <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
                <div className="flex-1 flex flex-col justify-start mr-10">
                    <img
                        src={logo}
                        alt="hoobank"
                        className='w-[266px] h-[72px] object-contain'
                    />

                    <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
                        A new way to make the payment easy, secure and reliable.
                    </p>
                </div>
                <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                    {footerLinks.map((footerLink) => (
                        <div
                            key={footerLink.key}
                            className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                            <h4 className='font-poppins font-medium text-[18px] text-dimWhite mb-2 leading-[27px]'>{footerLink.title} </h4>
                            <ul className='list-none mt-4'>
                                {footerLink.links.map((link, index) => (
                                    <li
                                        key={link.name}
                                        className={`font-normal font-poppins text-[16px] leading-24px text-dimWhite
                                        hover:text-secondary cursor-pointer ${index != footerLink.links.length - 1} ? 'mb-6' : 'mb-0'`}
                                    >
                                        {link.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>


            <div className="flex flex-wrap md:flex-row flex-col justify-between items-center w-full mt-5 border-t-[1px]
            border-t-[#3f3E] border-dimWhite">
                <div className="flex flex-1">
                    <p className='text-dimWhite mt-3'>Copyright @ 2023 Hoo Bank. All Right Reserved</p>
                </div>
                <div className="flex flex-row flex-nowrap items-center justify-between md:mt-0 mt-5">
                    {socialMedia.map((item, index) => (
                        <img
                            key={item.id}
                            src={item.icon}
                            alt={item.id}
                            className={`${index === socialMedia.length - 1 ? 'mr-0' : 'mr-8'} w-[21px] h-[21px] object-contain cursor-pointer`}

                        />
                    ))}
                </div>
            </div>

        </section >
    )
}
