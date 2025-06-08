import useUser from '../../contexts/user/useUser'
import useTheme from '../../contexts/theme/useTheme'

function Profile() {
  const { user } = useUser()
  const { theme } = useTheme()

  return (
    <div>
      <h2>Profil Sayfasi</h2>
      <p>Kullanici: {user.name}</p>
      <p>Secilen Tema: {theme}</p>
    </div>
  )
}

export default Profile
