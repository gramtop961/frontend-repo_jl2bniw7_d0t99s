import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import DivisionCards from './components/DivisionCards'
import StickyBlocks from './components/StickyBlocks'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main className="pt-16">
        <Hero />
        <DivisionCards />
        <StickyBlocks />
      </main>

      <Footer />
    </div>
  )
}

export default App
