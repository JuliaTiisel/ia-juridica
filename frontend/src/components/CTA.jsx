import React from 'react'
import styles from '../style.js'
import Button from './Button.jsx'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>Experimente agora nossa IA Jurídica!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Sua solução completa para criar petições iniciais e analisar documentos jurídicos com eficiência e precisão.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
        <Button/>
      </div>
    </section>
  )
}

export default CTA
