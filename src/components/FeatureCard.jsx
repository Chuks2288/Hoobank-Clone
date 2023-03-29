import React from 'react';
import { features } from '../constant';
import styles, { layout } from '../style';


export default function FeatureCard({ icon, title, content, index }) {

    return (
        <div className={`flex flex-row p-6 rounded-[20px] ${index != features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>

            <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                <img src={icon} alt="icon"
                    className='w-[50%] h-[50%] object-contain' />
            </div>
            <div className="flex flex-1 flex-col ml-3">
                <h4 className='text-white font-poppins font-semibold text-[18px] leading-[23px] mb-1'>
                    {title}
                </h4>
                <p className='text-white font-poppins font-normal text-[16px] leading-[23px] mb-1'>
                    {content}
                </p>

            </div>
        </div>
    )
}
