import Header from './login/Header'
import Profile from './login/Profile'
import ThemeSwitcher from './login/ThemeSwitcher'

export default function Layout({ children }) {
  return (
    <div>
      {/* Top bar with login related components */}
      <header className="card flex flex-col gap-4 items-center text-black dark:text-white dark:bg-gray-800">
        <div>
          <Header />
        </div>
        <div>
          <Profile />
        </div>
        <div>
          <ThemeSwitcher />
        </div>
      </header>
      <main className="p-4">{children}</main>
    </div>
  )
}
