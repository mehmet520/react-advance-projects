import { createContext, useState, useEffect, useMemo, useCallback } from 'react'

// Sistem temasını algılayan yardımcı fonksiyon
const getPreferredTheme = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getPreferredTheme)

  // Sistem teması değişirse tema güncellensin
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      console.log('Sistem teması değişti!')

      setTheme(mediaQuery.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handleChange)
    console.log('Listener eklendi')

    return () => {
      console.log('Dinleyici kaldirildi.')
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  // Tema toggle fonksiyonu (manuel geçiş)
  const toggleTheme = useCallback(
    () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light')),
    [],
  )

  // HTML classList üzerinden dark class'ını ekle/kaldır
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const contextValue = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme],
  )

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
