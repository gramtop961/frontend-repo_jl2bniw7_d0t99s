import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function DivisionCards() {
  return (
    <section id="aerospace" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Aerospace Card */}
        <a href="/aerospace" className="group rounded-xl border border-slate-200 p-6 sm:p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
          <div className="h-full flex flex-col">
            <h3 className="text-2xl font-semibold text-slate-900 mb-3">CCK Aerospace</h3>
            <p className="text-slate-700 mb-6">
              Tailored cutting and kitting solutions designed to save time, reduce waste, and ensure consistent quality for the aerospace industry.
            </p>
            <div className="mt-auto inline-flex items-center text-sky-900 font-medium group-hover:underline">
              Go to CCK Aerospace
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </div>
          <div className="mt-4 h-1 w-20 bg-sky-900 rounded" />
        </a>

        {/* Commercial Card */}
        <a href="/commercial" className="group rounded-xl border border-slate-200 p-6 sm:p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
          <div className="h-full flex flex-col">
            <h3 className="text-2xl font-semibold text-slate-900 mb-3">CCK Commercial</h3>
            <p className="text-slate-700 mb-6">
              Flexible cutting and kitting solutions delivering efficiency, quality, and versatility across marine, automotive, industrial, defence and decorative sectors.
            </p>
            <div className="mt-auto inline-flex items-center text-amber-500 font-medium group-hover:underline">
              Go to CCK Commercial
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </div>
          <div className="mt-4 h-1 w-20 bg-[#F7BC34] rounded" />
        </a>
      </div>
    </section>
  )
}
