import { BubblyLink } from "react-bubbly-transitions";
import vaporwave from '../assets/video/vaporwave.mp4'
import logoIIM from '../assets/img/logoIIM.png'

export default function HomePage() {
  return (
    <div className='section'>


      <div className='content'>

        <img src={logoIIM} alt="logo de IIM" className='imgIIM' />

        <h1>Bienvenue dans <span className='title'>IIMVERSE</span></h1>

        <BubblyLink to="/test1" className='buttonPulse' colorStart="#009FFF" colorEnd="#DF0FEB" children="Commencer le test"></BubblyLink>

      </div>

      <video src={vaporwave} autoPlay loop muted />
    </div>
  )
}
