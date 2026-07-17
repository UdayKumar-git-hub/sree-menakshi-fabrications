// src/components/ContactForm.jsx
import { useState } from 'react'
import { useEnquiry } from '../hooks/useEnquiry'
import { PRODUCTS } from '../lib/data'

export default function ContactForm({ defaultProduct = '' }) {
  const { submitEnquiry, loading, success, error } = useEnquiry()
  const [form, setForm] = useState({ name: '', phone: '', email: '', product: defaultProduct, message: '' })

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async e => {
    e.preventDefault()
    await submitEnquiry(form)
  }

  if (success) return (
    <div className="contact-form form-success">
      <div className="form-success__icon">✅</div>
      <h3>Enquiry Received</h3>
      <p>Thank you, <strong>{form.name}</strong>. Our team will contact you at <strong>{form.phone}</strong> within 24 hours.</p>
    </div>
  )

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-group">
        <label className="form-label" htmlFor="name">Full Name *</label>
        <input id="name" name="name" className="form-input" placeholder="Your name" required value={form.name} onChange={handle} />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="phone">Phone Number *</label>
        <input id="phone" name="phone" type="tel" className="form-input" placeholder="+91 98765 43210" required value={form.phone} onChange={handle} />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="email">Email Address</label>
        <input id="email" name="email" type="email" className="form-input" placeholder="you@company.com" value={form.email} onChange={handle} />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="product">Product Interest</label>
        <select id="product" name="product" className="form-input form-select" value={form.product} onChange={handle}>
          <option value="">Select a product…</option>
          {PRODUCTS.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
        </select>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="message">Message / Requirements</label>
        <textarea id="message" name="message" className="form-input form-textarea" placeholder="Opening size, location, quantity…" value={form.message} onChange={handle} />
      </div>
      {error && <p style={{ color: '#ff6b6b', fontSize: 13 }}>Error: {error}. Please call us directly.</p>}
      <button type="submit" className="btn btn--primary btn--full" disabled={loading}>
        {loading ? 'Sending…' : 'Send Enquiry →'}
      </button>
      <p style={{ fontSize: 12, color: 'var(--text-muted)', textAlign: 'center' }}>
        📞 Or call directly: <a href="tel:+918047635547" style={{ color: 'var(--champagne)' }}>+91 80476 35547</a>
      </p>
    </form>
  )
}
