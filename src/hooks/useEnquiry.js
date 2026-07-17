// src/hooks/useEnquiry.js
import { useState } from 'react'
import { supabase } from '../lib/supabase'

const isSupabaseConfigured =
  import.meta.env.VITE_SUPABASE_URL &&
  !import.meta.env.VITE_SUPABASE_URL.includes('your-project-ref')

export function useEnquiry() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error,   setError]   = useState(null)

  async function submitEnquiry(formData) {
    setLoading(true)
    setError(null)
    setSuccess(false)

    if (!isSupabaseConfigured) {
      // Simulate success when Supabase not yet configured
      await new Promise(r => setTimeout(r, 800))
      setSuccess(true)
      setLoading(false)
      return true
    }

    try {
      const { error } = await supabase.from('enquiries').insert([{
        name:    formData.name,
        phone:   formData.phone,
        email:   formData.email || null,
        product: formData.product || null,
        message: formData.message || null,
        status:  'new',
      }])
      if (error) throw error
      setSuccess(true)
      return true
    } catch (e) {
      setError(e.message)
      return false
    } finally {
      setLoading(false)
    }
  }

  return { submitEnquiry, loading, success, error, reset: () => { setSuccess(false); setError(null) } }
}
