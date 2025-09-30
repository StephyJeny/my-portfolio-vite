import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function submit(e) {
    e.preventDefault()
    // Simple clientside mailto fallback:
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(form.message + `\n\nFrom: ${form.name} (${form.email})`)
    window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-center">Contact</h2>
        <form onSubmit={submit} className="mt-6 grid gap-3">
          <input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name" className="px-3 py-2 rounded border" />
          <input required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Your email" className="px-3 py-2 rounded border" />
          <textarea required value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Your message" className="px-3 py-2 rounded border h-32" />
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-teal-500 text-white rounded">Send (opens email)</button>
            <a href="tel:+1234567890" className="px-4 py-2 border rounded">Call +254 707478416</a>
          </div>
        </form>
      </div>
    </section>
  )
}
