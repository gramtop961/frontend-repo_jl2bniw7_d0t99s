import React from 'react'
import { NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive ? 'text-slate-900 bg-white' : 'text-white/90 hover:text-white/100 hover:bg-white/10'
  }`

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-sm bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-md bg-white text-slate-900 font-bold grid place-items-center shadow-sm">
            CCK
          </div>
          <span className="text-white/90 font-semibold tracking-wide">Cristex Cutting & Kitting</span>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>
          <a href="#aerospace" className="px-3 py-2 rounded-md text-sm font-medium text-white/90 hover:text-white/100 hover:bg-white/10 transition-colors">
            Aerospace / Commercial
          </a>
          <a href="/about.html" className="px-3 py-2 rounded-md text-sm font-medium text-white/90 hover:text-white/100 hover:bg-white/10 transition-colors">
            About
          </a>
          <a href="/contact.html" className="px-3 py-2 rounded-md text-sm font-medium text-white/90 hover:text-white/100 hover:bg-white/10 transition-colors">
            Contact
          </a>
          <a href="/news.html" className="px-3 py-2 rounded-md text-sm font-medium text-white/90 hover:text-white/100 hover:bg-white/10 transition-colors">
            Cristex Group News
          </a>
        </nav>
      </div>
    </header>
  )
}
