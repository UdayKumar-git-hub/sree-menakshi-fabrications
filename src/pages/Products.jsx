// src/pages/Products.jsx
import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { useProducts } from '../hooks/useProducts'
import { useReveal } from '../hooks/useReveal'
import { CATEGORIES } from '../lib/data'

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('cat') || 'all'
  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const { products, loading } = useProducts(activeCategory)

  useEffect(() => {
    const cat = searchParams.get('cat') || 'all'
    setActiveCategory(cat)
  }, [searchParams])

  const handleCategoryChange = (key) => {
    setActiveCategory(key)
    if (key === 'all') {
      searchParams.delete('cat')
      setSearchParams(searchParams)
    } else {
      setSearchParams({ cat: key })
    }
  }

  useReveal([products, loading])

  return (
    <div>
      <div className="page-hero">
        <div className="section__inner">
          <span className="eyebrow">Enterprise Solutions</span>
          <h1>Our Product Suite</h1>
          <p>
            Explore our range of heavy-duty entry systems, structural pre-engineered buildings, and premium fabrication works built for endurance.
          </p>
        </div>
      </div>

      <section className="section section--bg">
        <div className="section__inner">
          <div className="prod-filters reveal">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                className={`filter-btn ${activeCategory === cat.key ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {loading ? (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-muted)' }}>
              Loading products...
            </div>
          ) : products.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-muted)' }}>
              No products found in this category.
            </div>
          ) : (
            <div className="products-grid">
              {products.map((prod, idx) => (
                <Link
                  key={prod.id}
                  to={`/products/${prod.id}`}
                  className={`product-card reveal reveal-d${(idx % 3) + 1}`}
                  style={{ textDecoration: 'none' }}
                >
                  {prod.is_featured && <span className="product-card__badge">Featured</span>}
                  {prod.image_url ? (
                    <div className="product-card__img-wrap">
                      <img src={prod.image_url} alt={prod.name} className="product-card__img" loading="lazy" />
                    </div>
                  ) : null}
                  <div className="product-card__body">
                    <h3 className="product-card__title">{prod.name}</h3>
                    <p className="product-card__desc">{prod.description}</p>
                    {prod.tags?.length > 0 && (
                      <ul className="product-card__tags">
                        {prod.tags.slice(0, 3).map(t => <li key={t}>{t}</li>)}
                      </ul>
                    )}
                    <span className="product-card__link">View Details →</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
