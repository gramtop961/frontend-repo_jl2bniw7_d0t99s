import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] bg-white flex items-center justify-center overflow-hidden">
      {/* Spline background cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient scrim to ensure legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-24 sm:py-32">
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
          Cristex Cutting & Kitting
        </h1>
        <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
          CCK is the core service division of Cristex Group, supporting customers through:
        </p>
        <ul className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6 space-y-1">
          <li>• tailored cutting and kitting solutions</li>
          <li>• improved manufacturing efficiency</li>
          <li>• reduced waste</li>
          <li>• consistent quality</li>
        </ul>
        <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-8">
          Two operating divisions: <span className="font-medium text-slate-900">CCK Aerospace</span> and <span className="font-medium text-slate-900">CCK Commercial</span>. CCK bridges material supply → finished components.
        </p>
        <a href="/selector" className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-6 py-3 text-sm sm:text-base font-medium shadow-sm hover:bg-slate-800 transition-colors">
          Choose Aerospace or Commercial
        </a>
      </div>
    </section>
  )
}
