import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-sm">
          <a href="/" className="text-white/80 hover:text-white">Home</a>
          <a href="/aerospace" className="text-white/80 hover:text-white">Aerospace</a>
          <a href="/commercial" className="text-white/80 hover:text-white">Commercial</a>
          <a href="/about.html" className="text-white/80 hover:text-white">About</a>
          <a href="/contact.html" className="text-white/80 hover:text-white">Contact</a>
          <a href="/privacy.html" className="text-white/80 hover:text-white">Privacy Policy</a>
          <a href="/cookies.html" className="text-white/80 hover:text-white">Cookie Policy</a>
        </div>
        <div className="border-t border-white/10 mt-8 pt-6 text-xs text-white/60">
          © Cristex Group 2025
        </div>
      </div>
    </footer>
  )
}
