import { Link } from 'react-router-dom'
import Nav from '../components/Nav/Nav'
import vaporwave from '../assets/video/vaporwave.mp4'

export default function HomePage() {
  return (
    <div className='section'>

      <video src={vaporwave} autoPlay loop muted />
      <Nav />

      <div className='content'>

        <h1>Bienvenue dans <span className='title'>IIMVERSE</span></h1>

        <Link to="/test1" className='buttonPulse'>Commencer le test</Link>

      </div>

    </div>
  )
}
