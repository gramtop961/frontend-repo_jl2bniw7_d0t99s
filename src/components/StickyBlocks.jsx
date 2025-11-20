import React from 'react'

const Block = ({ title, href }) => (
  <a
    href={href}
    className="group rounded-xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-all flex items-center justify-between"
  >
    <div className="text-slate-900 text-lg font-semibold">{title}</div>
    <div className="h-2 w-12 bg-slate-900/80 group-hover:w-16 transition-all rounded" />
  </a>
)

export default function StickyBlocks() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Block title="About Us" href="/about.html" />
          <Block title="Contact Us" href="/contact.html" />
          <Block title="Cristex Group News" href="/news.html" />
        </div>
      </div>
    </section>
  )
}
