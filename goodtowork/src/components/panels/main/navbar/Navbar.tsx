import { useNavigate } from 'react-router-dom'
import './Navbar.css' 

const Navbar = () => {
  return (
    <div style={{ width: 200, height: '100%', backgroundColor: 'var(--main-color)' }}>
      <div style={{ width: '100%', height: 280 }}>
      </div>
      <NavButton path='/home' title='HOME' />
      <NavButton path='/projects' title='TASKS' />
      <NavButton path='/settings' title='SETTINGS' />
    </div>
  )
}

type NavButtonProps = {
  path: string,
  title: string
}

const NavButton = (props: NavButtonProps) => {

  const navigate = useNavigate()

  return (
    <div className='NavButton-button' onClick={() => navigate(props.path)}>
        <div className='noselect NavButton-title'>
          { props.title }
        </div>
    </div>
  )
}

export default Navbar