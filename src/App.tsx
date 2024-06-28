import { useState } from 'react'
import { motion } from 'framer-motion'

export default function App() {

  const searchMovie = (e) => {
    e.preventDefault()
    console.log("La fonction searchMovie a été appelée")
  }

  return (
      <main>
        <motion.div></motion.div>
        <h1>Cinemax</h1>
        <h3>
          Trouvez les infos de films et de séries en 2 clics !
        </h3>
        <form onSubmit={searchMovie}>
          <input 
          type="text"
          className="border" />
          <button
          className="border"
          >Rechercher</button>
        </form>
      </main>

  )
}

