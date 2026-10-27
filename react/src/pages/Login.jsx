import { useState } from 'react'
import { useNavigate } from 'react-router'
import { LoginRequest } from '../api/auth'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('admin@softclub.tj')
  const [password, setPassword] = useState('1234')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const token = await LoginRequest({ email, password })
    setLoading(false)
    if (token) {
      navigate('/', { replace: true })
    } else {
      setError('Email yo parol nodurust')
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 320, margin: '80px auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
      <h1>Login</h1>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" disabled={loading}>{loading ? 'Loading...' : 'Login'}</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  )
}

export default Login
