// src/hooks/useTestimonials.js
import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { TESTIMONIALS } from '../lib/data'

const isSupabaseConfigured =
  import.meta.env.VITE_SUPABASE_URL &&
  !import.meta.env.VITE_SUPABASE_URL.includes('your-project-ref')

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetch() {
      if (!isSupabaseConfigured) {
        setTestimonials(TESTIMONIALS)
        setLoading(false)
        return
      }
      try {
        const { data, error } = await supabase
          .from('testimonials')
          .select('*')
          .eq('is_published', true)
          .order('created_at', { ascending: false })
        if (error) throw error
        if (data && data.length > 0) {
          setTestimonials(data)
        } else {
          setTestimonials(TESTIMONIALS)
        }
      } catch {
        setTestimonials(TESTIMONIALS)
      } finally {
        setLoading(false)
      }
    }
    fetch()
  }, [])

  return { testimonials, loading }
}
