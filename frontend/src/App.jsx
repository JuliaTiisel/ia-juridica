import React from 'react'
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials
} from './components/index.js'
import Chat from './components/Chat.jsx'
import styles from './style.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rota para a página principal */}
        <Route
          path="/"
          element={
            <div className='bg-primary w-full overflow-hidden'>
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
                  <Testimonials />
                  <Clients />
                  <CTA />
                  <Footer />
                </div>
              </div>
            </div>
          }
        />

        {/* Rota para a página de Chat */}
        <Route
          path="/chat"
          element={<Chat />}
        />
      </Routes>
    </Router>
  )
}

export default App
