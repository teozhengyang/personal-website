import { useEffect } from 'react'
import './rippleReveal.css'

export default function RippleReveal({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish()
    }, 800) // animation duration

    return () => clearTimeout(timer)
  }, [onFinish])

  return <div className="ripple-overlay" />
}
