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

    // 1. Submit to Google Sheets (if URL is set in env)
    const googleSheetsUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL
    let googleSheetSuccess = false
    if (googleSheetsUrl && !googleSheetsUrl.includes('your-google-script-url')) {
      try {
        await fetch(googleSheetsUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            email: formData.email || '',
            product: formData.product || '',
            message: formData.message || '',
            timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
          })
        })
        googleSheetSuccess = true
      } catch (e) {
        console.error('Google Sheets submission failed:', e)
      }
    }

    // 2. Submit to Supabase (if configured)
    if (!isSupabaseConfigured) {
      if (!googleSheetSuccess) {
        // Fallback simulated delay
        await new Promise(r => setTimeout(r, 800))
      }
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
