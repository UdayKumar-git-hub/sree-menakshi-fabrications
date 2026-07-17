// src/pages/ProductDetail.jsx
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { PRODUCTS } from '../lib/data'
import { useReveal } from '../hooks/useReveal'
import ContactForm from '../components/ContactForm'

const isSupabaseConfigured =
  import.meta.env.VITE_SUPABASE_URL &&
  !import.meta.env.VITE_SUPABASE_URL.includes('your-project-ref')

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [specs, setSpecs] = useState([])

  useEffect(() => {
    async function fetchDetails() {
      setLoading(true)
      if (!isSupabaseConfigured) {
        const found = PRODUCTS.find((p) => p.id === id)
        setProduct(found)
        setLoading(false)
        return
      }
      try {
        const { data: prodData, error: prodErr } = await supabase
          .from('products').select('*').eq('id', id).single()
        if (prodErr) throw prodErr
        setProduct(prodData)
        const { data: specData } = await supabase.from('specs').select('*').eq('product_id', id)
        if (specData) setSpecs(specData)
      } catch {
        const found = PRODUCTS.find((p) => p.id === id)
        setProduct(found)
      } finally {
        setLoading(false)
      }
    }
    fetchDetails()
    window.scrollTo({ top: 0 })
  }, [id])

  useReveal([product, loading])

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '200px 20px', background: 'var(--bg)', color: 'var(--text-muted)' }}>
        Loading product specifications...
      </div>
    )
  }

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '200px 20px', background: 'var(--bg)' }}>
        <h2 style={{ color: '#fff', marginBottom: 16, fontFamily: 'var(--font-heading)' }}>Product Not Found</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>The product you requested does not exist.</p>
        <Link to="/products" className="btn btn--primary">Back to Products</Link>
      </div>
    )
  }

  return (
    <div>
      <div className="page-hero" style={{ textAlign: 'left' }}>
        <div className="section__inner" style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <Link to="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--champagne)', marginBottom: 24 }}>
            ← Back to All Products
          </Link>
          <span className="eyebrow" style={{ display: 'block' }}>
            {product.category.replace('_', ' ').toUpperCase()}
          </span>
          <h1 style={{ textAlign: 'left', margin: '8px 0 16px' }}>{product.name}</h1>
          <p style={{ margin: 0, maxWidth: 720, textAlign: 'left' }}>{product.description}</p>
        </div>
      </div>

      <section className="section section--bg">
        <div className="section__inner">
          <div className="contact-layout">
            <div className="reveal">
              <h2 className="heading-sm" style={{ marginBottom: 24 }}>Engineering Parameters</h2>
              <div className="specs-wrap">
                <table className="specs-table">
                  <thead>
                    <tr>
                      <th>Specification</th>
                      <th>Value / Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specs.length > 0 ? (
                      specs.map((spec) => (
                        <tr key={spec.id}>
                          <td>{spec.parameter}</td>
                          <td>{spec.standard || spec.pro}</td>
                        </tr>
                      ))
                    ) : (
                      <>
                        <tr><td>Material Compatibility</td><td>IS 2062 Grade Steel / SS 304 / SS 316</td></tr>
                        <tr><td>Thickness Range</td><td>0.8 mm to 1.6 mm options</td></tr>
                        <tr><td>Standard Width</td><td>Up to 8.5 meters span (Customisable)</td></tr>
                        <tr><td>Corrosion Resistance</td><td>Powder-coated, epoxy-primer, or hot-dip galvanised</td></tr>
                        <tr><td>Drive Integration</td><td>Compatible with commercial high-torque motors</td></tr>
                        <tr><td>Quality Standard</td><td>ISO 9001:2015 manufacturing controls</td></tr>
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="reveal">
              <h2 className="heading-sm" style={{ marginBottom: 24 }}>Request Technical Proposal</h2>
              <ContactForm defaultProduct={product.name} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
