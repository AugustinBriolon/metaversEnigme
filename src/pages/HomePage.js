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

      <div className='content'>

        <h3 className="textHome">Nous sommes en l’an 3090 et vous avez été sélectionnés pour intégrer le célèbre institut de l'internet et du multimédia.Pour y entrer, vous devez passer un examen spécial : IIMVERSE. Résolvez les énigmes des 5 différents axes pour acquérir les compétences qui vous ouvriront les portes de cette prestigieuse école.</h3>
      
      </div>      

      <div className="overlay"></div>
      <video src={vaporwave} autoPlay loop muted />
    </div>
  )
}
