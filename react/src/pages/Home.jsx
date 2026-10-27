import { useNavigate } from 'react-router'

const Home = () => {
  const navigate = useNavigate()

  function logout() {
    localStorage.removeItem('token')
    navigate('/login', { replace: true })
  }

  return (
    <div style={{ maxWidth: 480, margin: '80px auto', textAlign: 'center' }}>
      <h1>Home</h1>
      <p>Shumo login shuded. Token dar localStorage:</p>
      <code style={{ wordBreak: 'break-all' }}>{localStorage.getItem('token')}</code>
      <br /><br />
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Home
