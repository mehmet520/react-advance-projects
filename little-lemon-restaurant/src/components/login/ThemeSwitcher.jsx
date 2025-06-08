import useTheme from '../../contexts/theme/useTheme'

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme}>
      🎨 Tema değiştir (Şu an: {theme === 'dark' ? 'Koyu' : 'Açık'})
    </button>
  )
}
