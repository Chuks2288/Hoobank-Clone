import React from 'react';
import styles from './style';

import {
  Billing, Business, Button, CardDeal, Clients, Cta, Feedback, GetStarted, Hero,
  Navbar, Stats, Testimonial, Footer
} from './components';



export default function App() {
  return (
    <div className='bg-primary w-full overflow-hidden md:px-[100px] px-0'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonial />
          <Clients />
          <Cta />
          <Footer />
        </div>
      </div>
    </div>
  )
}
