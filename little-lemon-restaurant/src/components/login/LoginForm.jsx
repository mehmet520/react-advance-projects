import { useState } from 'react'
import useUser from '../../contexts/user/useUser'

export default function LoginForm() {
  const [name, setName] = useState('')
  const { setUser } = useUser()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim()) {
      setUser({ name })
      setName('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <label htmlFor="login-name" className="block mb-2 font-semibold">
        Login Name:
      </label>
      <input
        id="login-name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border rounded px-3 py-2 mr-2"
        placeholder="Enter your name"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Login
      </button>
    </form>
  )
}
