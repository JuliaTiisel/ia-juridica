import React from 'react'
import { features } from '../constants/index.js'
import styles, { layout } from '../style.js'
import Button from './Button.jsx'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img
        src={icon}
        alt='ícone'
        className='w-[50%] h-[50%] object-contain'
      />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
        {content}
      </p>
    </div>
  </div>
)

const Business = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Você se concentra na causa, <br className='sm:block hidden'/>nós elaboramos a petição inicial.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Com a petição adequada, você pode agilizar seus processos e alcançar resultados precisos. Nossa IA Jurídica utiliza tecnologia avançada para analisar documentos e criar petições personalizadas, permitindo que você se dedique à estratégia do caso.
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default Business
