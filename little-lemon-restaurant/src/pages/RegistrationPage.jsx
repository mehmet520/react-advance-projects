import RegistrationForm from '../components/registration/RegistrationForm'
import LoginForm from '../components/login/LoginForm'
import useUser from '../contexts/user/useUser'

export default function RegistrationPage() {
  const { user } = useUser()
  return (
    <div>
      <h2 className="pt-8 text-2xl font-semibold text-blue-400 text-center">
        Login - Registration Page
      </h2>
      <div className="mb-4 text-center">
        {user?.name && (
          <span className="text-green-700 font-bold">
            Aktif kullanıcı: {user.name}
          </span>
        )}
      </div>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        <div className="w-full md:w-1/2">
          <LoginForm />
        </div>
        <div className="w-full md:w-1/2">
          <RegistrationForm />
        </div>
      </div>
    </div>
  )
}
