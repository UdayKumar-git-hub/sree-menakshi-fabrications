// src/components/ContactForm.jsx
import { useState, useEffect, useRef } from 'react'
import { useEnquiry } from '../hooks/useEnquiry'
import { PRODUCTS, PACKAGES } from '../lib/data'

export default function ContactForm({ defaultProduct = '', defaultPackage = '' }) {
  const { submitEnquiry, loading, success, error } = useEnquiry()
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    product: defaultProduct || defaultPackage,
    message: defaultPackage ? `Enquiry for package: ${defaultPackage}` : '',
  })

  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const selectProduct = (name) => {
    setForm(f => ({ ...f, product: name }))
    setDropdownOpen(false)
  }

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

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
      {defaultPackage && (
        <div className="form-package-banner">
          <svg viewBox="0 0 16 16"><path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
          <span>Enquiring about: <strong>{defaultPackage}</strong></span>
        </div>
      )}
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
      <div className="form-group" style={{ position: 'relative' }} ref={dropdownRef}>
        <label className="form-label">Product / Package Interest</label>
        <button
          type="button"
          className={`form-input form-select-trigger ${dropdownOpen ? 'active' : ''}`}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span>{form.product || 'Select a product or package…'}</span>
          <svg className="select-chevron" viewBox="0 0 12 12"><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" /></svg>
        </button>

        {dropdownOpen && (
          <div className="form-select-dropdown">
            <div className="form-select-group">
              <div className="form-select-group-title">Solution Packages</div>
              {PACKAGES.map(p => (
                <button
                  key={p.id}
                  type="button"
                  className={`form-select-option ${form.product === p.name ? 'selected' : ''}`}
                  onClick={() => selectProduct(p.name)}
                >
                  <span>{p.name}</span>
                  {form.product === p.name && <span className="tick">✓</span>}
                </button>
              ))}
            </div>
            <div className="form-select-group">
              <div className="form-select-group-title">Individual Products</div>
              {PRODUCTS.map(p => (
                <button
                  key={p.id}
                  type="button"
                  className={`form-select-option ${form.product === p.name ? 'selected' : ''}`}
                  onClick={() => selectProduct(p.name)}
                >
                  <span>{p.name}</span>
                  {form.product === p.name && <span className="tick">✓</span>}
                </button>
              ))}
            </div>
          </div>
        )}
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
