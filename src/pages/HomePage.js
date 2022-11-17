import { Link } from 'react-router-dom'
import Nav from '../components/Nav/Nav'
import vaporwave from '../assets/video/vaporwave.mp4'

export default function HomePage() {
  return (
    <div className='section'>

      <video src={vaporwave} autoPlay loop muted />
      <Nav />

      <div className='content'>

        <h1 className='bienvenue'>Bienvenue dans <span className='title'>IIMVERSE</span></h1>

        <Link to="/test1" className='buttonPulse'>Commencer le test</Link>

       <br></br><br></br><br></br> <h3>Nous sommes en l’an 3090 et vous avez été sélectionnés pour intégrer le célèbre institut de l'internet et du multimédia.Pour y entrer, vous devez passer un examen spécial : IIMVERSE. Résolvez les énigmes des 5 différents axes pour acquérir les compétences qui vous ouvriront les portes de cette prestigieuse école.</h3>

      </div>
      

    </div>
     
  )
}
