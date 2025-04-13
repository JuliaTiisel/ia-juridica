import React from 'react'
import { feedback } from '../constants/index.js'
import styles from '../style.js'
import Feedback from './Feedback.jsx'

const Testimonials = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexce} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40' />
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h2 className={styles.heading2}>
          O que nossos clientes <br className='sm:block hidden'/>estão dizendo
        </h2>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Descubra como nossa IA Jurídica tem revolucionado a elaboração de petições e a análise de documentos, proporcionando soluções precisas e eficientes.
          </p>
        </div>
      </div>
      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-contrainer relative z-[1]'>
        {feedback.map((card) => (
          <Feedback key={card.id} {...card} />
        ))}
      </div>
    </section>
  )
}

export default Testimonials
