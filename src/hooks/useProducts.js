// src/hooks/useProducts.js
import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { PRODUCTS } from '../lib/data'

const isSupabaseConfigured =
  import.meta.env.VITE_SUPABASE_URL &&
  !import.meta.env.VITE_SUPABASE_URL.includes('your-project-ref')

export function useProducts(category = 'all') {
  const [products, setProducts] = useState([])
  const [loading,  setLoading]  = useState(true)
  const [error,    setError]    = useState(null)

  useEffect(() => {
    async function fetch() {
      setLoading(true)
      if (!isSupabaseConfigured) {
        // Use local fallback data
        const filtered = category === 'all'
          ? PRODUCTS
          : PRODUCTS.filter(p => p.category === category)
        setProducts(filtered)
        setLoading(false)
        return
      }
      try {
        let query = supabase.from('products').select('*').order('is_featured', { ascending: false })
        if (category !== 'all') query = query.eq('category', category)
        const { data, error } = await query
        if (error) throw error
        setProducts(data)
      } catch (e) {
        setError(e.message)
        // Fall back to local data
        const filtered = category === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === category)
        setProducts(filtered)
      } finally {
        setLoading(false)
      }
    }
    fetch()
  }, [category])

  return { products, loading, error }
}
