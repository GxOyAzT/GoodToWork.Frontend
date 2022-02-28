import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <div style={{ width: 200, height: '100%', backgroundColor: 'blue' }}>
      <div onClick={() => navigate('/home')}>HOME</div>
      <div onClick={() => navigate('/projects')}>PROJECTS</div>
    </div>
  )
}

export default Navbar