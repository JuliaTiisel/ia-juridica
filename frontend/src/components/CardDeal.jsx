import React from 'react'
import { card } from '../assets/index.js'
import Button from './Button.jsx'
import styles, { layout } from '../style.js'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Simplifique a criação de petições <br className='sm:block hidden'/>com nossa IA Jurídica
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Nossa ferramenta utiliza algoritmos avançados para analisar documentos e elaborar petições personalizadas, proporcionando soluções jurídicas precisas e ágeis para os seus casos.
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt='documento jurídico'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
