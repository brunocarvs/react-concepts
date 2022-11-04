import './styles.css'
import logo from '../../assets/images/logo.svg'

export function Header() {
  return (
    <header>
      <strong className='header'>
        <img src={logo} alt="ignite-logo" />
      </strong>
    </header>
  );
}