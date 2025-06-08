import useUser from '../../contexts/user/useUser'

export default function Header() {
  const { user } = useUser()
  return <h1> Willkommen {user.name}!</h1>
}
