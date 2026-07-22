// src/pages/Packages.jsx
import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { PACKAGES, PACKAGE_CATEGORIES, PACKAGE_ADDONS } from '../lib/data'

// ── Collection labels for section headings ──────────────────
const COLLECTION_LABELS = {
  residential:  'Residential Collection',
  commercial:   'Commercial Collection',
  industrial:   'Industrial Collection',
  builder:      'Builder & Developer Collection',
  agricultural: 'Agricultural Collection',
}

// ── SVG icons per package type ──────────────────────────────
const PKG_ICONS = {
  home: (
    <svg viewBox="0 0 24 24"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" /><path d="M9 21V12h6v9" /></svg>
  ),
  gate: (
    <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="18" rx="1" /><rect x="14" y="3" width="7" height="18" rx="1" /><path d="M10 12h4" /></svg>
  ),
  outdoor: (
    <svg viewBox="0 0 24 24"><path d="M3 21h18" /><path d="M5 21V7l7-4 7 4v14" /><path d="M9 21v-4h6v4" /></svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
  ),
  storefront: (
    <svg viewBox="0 0 24 24"><path d="M2 7l2-4h16l2 4" /><path d="M4 7v14h16V7" /><path d="M2 7h20" /><path d="M9 21V11h6v10" /></svg>
  ),
  warehouse: (
    <svg viewBox="0 0 24 24"><path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35a2 2 0 0 1 .96-1.71l8-4.88a2 2 0 0 1 2.08 0l8 4.88A2 2 0 0 1 22 8.35z" /><path d="M6 18h12" /><path d="M6 14h12" /></svg>
  ),
  factory: (
    <svg viewBox="0 0 24 24"><path d="M2 20V8l4 2V6l4 2V4l4 2V2h8v18H2z" /><path d="M6 20v-4h4v4" /><path d="M14 20v-4h4v4" /></svg>
  ),
  turnkey: (
    <svg viewBox="0 0 24 24"><circle cx="12" cy="10" r="3" /><path d="M12 13v8" /><path d="M10 18h4" /><path d="M7.5 4A7.5 7.5 0 0 1 12 2.5 7.5 7.5 0 0 1 19.5 10c0 3-2 5.5-4.5 7h-6C6.5 15.5 4.5 13 4.5 10A7.5 7.5 0 0 1 7.5 4z" /></svg>
  ),
  building: (
    <svg viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22V12h6v10" /><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01" /></svg>
  ),
  partner: (
    <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
  ),
  farm: (
    <svg viewBox="0 0 24 24"><path d="M3 21h18" /><path d="M5 21V11l7-6 7 6v10" /><path d="M12 5v16" /><path d="M8 14h8" /></svg>
  ),
  automation: (
    <svg viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="2" /><path d="M12 6V2" /><path d="M7 18v4" /><path d="M17 18v4" /><circle cx="12" cy="12" r="2" /></svg>
  ),
  finish: (
    <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
  ),
  architecture: (
    <svg viewBox="0 0 24 24"><path d="M12 2L2 7v10l10 5 10-5V7L12 2z" /><path d="M12 22V12" /><path d="M22 7L12 12 2 7" /></svg>
  ),
  express: (
    <svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
  ),
}

// ── Badge color mapping ─────────────────────────────────────
const BADGE_COLORS = {
  'Best Seller': 'pkg-badge--gold',
  'Popular':     'pkg-badge--silver',
  'Premium':     'pkg-badge--champagne',
  'Partnership': 'pkg-badge--partner',
}

export default function Packages() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCat = searchParams.get('cat') || 'all'
  const [activeCat, setActiveCat] = useState(initialCat)

  const handleCategoryChange = (key) => {
    setActiveCat(key)
    if (key === 'all') {
      searchParams.delete('cat')
      setSearchParams(searchParams)
    } else {
      setSearchParams({ cat: key })
    }
  }

  // Filter packages
  const filtered = activeCat === 'all'
    ? PACKAGES
    : activeCat === 'addon'
    ? [] // Add-ons rendered separately
    : PACKAGES.filter(p => p.collection === activeCat)

  // Group filtered packages by collection for sectioned layout
  const grouped = filtered.reduce((acc, pkg) => {
    if (!acc[pkg.collection]) acc[pkg.collection] = []
    acc[pkg.collection].push(pkg)
    return acc
  }, {})

  const showAddons = activeCat === 'all' || activeCat === 'addon'

  useReveal([activeCat])

  return (
    <div>
      {/* ── Page Hero ──────────────────────────────────────────── */}
      <div className="page-hero">
        <div className="section__inner">
          <span className="eyebrow">Premium Solutions</span>
          <h1>Solution Packages</h1>
          <p>
            Complete steel solutions bundled for maximum value — from residential dream homes to turnkey industrial infrastructure.
          </p>
        </div>
      </div>

      {/* ── Category Filters ───────────────────────────────────── */}
      <section className="section section--bg">
        <div className="section__inner">
          <div className="prod-filters reveal">
            {PACKAGE_CATEGORIES.map(cat => (
              <button
                key={cat.key}
                className={`filter-btn${activeCat === cat.key ? ' active' : ''}`}
                onClick={() => handleCategoryChange(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* ── Package Cards by Collection ───────────────────── */}
          {Object.entries(grouped).map(([collection, pkgs]) => (
            <div key={collection} className="pkg-collection reveal">
              <div className="pkg-collection__header">
                <div className="pkg-collection__line" />
                <h2 className="pkg-collection__title">
                  {COLLECTION_LABELS[collection] || collection}
                </h2>
                <div className="pkg-collection__line" />
              </div>

              <div className="pkg-grid">
                {pkgs.map((pkg, idx) => (
                  <div
                    key={pkg.id}
                    className={`pkg-card reveal reveal-d${Math.min(idx + 1, 4)}`}
                  >
                    {pkg.badge && (
                      <span className={`pkg-badge ${BADGE_COLORS[pkg.badge] || ''}`}>
                        {pkg.badge}
                      </span>
                    )}

                    <div className="pkg-card__icon-wrap">
                      {PKG_ICONS[pkg.icon] || PKG_ICONS.home}
                    </div>

                    <h3 className="pkg-card__name">{pkg.name}</h3>

                    <div className="pkg-card__for">
                      <span className="pkg-card__for-label">Perfect for</span>
                      <span className="pkg-card__for-value">{pkg.perfectFor}</span>
                    </div>

                    <div className="pkg-card__divider" />

                    <div className="pkg-card__inclusions">
                      <span className="pkg-card__inc-title">What's included</span>
                      <ul>
                        {pkg.inclusions.map(item => (
                          <li key={item}>
                            <svg className="pkg-check" viewBox="0 0 16 16"><path d="M3 8l3 3 7-7" /></svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pkg-card__outcome">
                      <svg viewBox="0 0 16 16"><path d="M8 1v14M1 8h14" /></svg>
                      <span>{pkg.outcome}</span>
                    </div>

                    <Link
                      to={`/contact?package=${encodeURIComponent(pkg.name)}`}
                      className="btn btn--primary btn--full pkg-card__cta"
                    >
                      Get Package Quote →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {filtered.length === 0 && !showAddons && (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-muted)' }}>
              No packages found in this category.
            </div>
          )}

          {/* ── Premium Add-On Packages ──────────────────────── */}
          {showAddons && (
            <div className="pkg-collection reveal">
              <div className="pkg-collection__header">
                <div className="pkg-collection__line" />
                <h2 className="pkg-collection__title">Premium Add-On Packages</h2>
                <div className="pkg-collection__line" />
              </div>

              <div className="pkg-addons-grid">
                {PACKAGE_ADDONS.map((addon, idx) => (
                  <div
                    key={addon.id}
                    className={`pkg-addon reveal reveal-d${Math.min(idx + 1, 4)}`}
                  >
                    <div className="pkg-addon__icon">
                      {PKG_ICONS[addon.icon] || PKG_ICONS.automation}
                    </div>
                    <h4 className="pkg-addon__name">{addon.name}</h4>
                    <ul className="pkg-addon__items">
                      {addon.items.map(item => (
                        <li key={item}>
                          <svg className="pkg-check" viewBox="0 0 16 16"><path d="M3 8l3 3 7-7" /></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── Bottom CTA ───────────────────────────────────── */}
          <div className="pkg-bottom-cta reveal">
            <div className="pkg-bottom-cta__inner">
              <h3 className="heading-md">Need a custom solution?</h3>
              <p className="body-lg">
                Don't see a package that fits? We design custom steel solutions tailored to your exact requirements.
              </p>
              <Link to="/contact" className="btn btn--primary">
                Talk to Our Engineers →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
