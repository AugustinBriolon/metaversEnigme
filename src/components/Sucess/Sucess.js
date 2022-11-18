import { useRef } from 'react'
import { useNavigate } from "react-router-dom"

export default function Sucess() {

  const inputRef = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  function handleClick() {
    if (inputRef2.current.value === 'modelisation' || inputRef2.current.value === 'modelisation ' || inputRef2.current.value === 'Modelisation ' || inputRef2.current.value === 'Modelisation ') {
      if(inputRef3.current.value === 'design' || inputRef3.current.value === 'Design' || inputRef3.current.value === 'design ' || inputRef3.current.value === 'Design ') {
        if(inputRef.current.value === 'developpeur' || inputRef.current.value === 'Developpeur' || inputRef.current.value === 'developpeur ' || inputRef.current.value === 'Developpeur ') {
          window.location.replace('https://admissions.leonard-de-vinci.net/ecole/IIM')
        }
      }
    } else {
      alert('Mauvaise réponse !');
    }
  }

  return (
    <div className='section sectionSucess'>

      <h3>Indice CDI</h3>
      <form className='input input3'>
        <input type="text" placeholder='Indice CDI' ref={inputRef} id="message" name="message" />
      </form>

      <h3>Indice CD</h3>
      <form className='input input3'>
        <input type="text" placeholder='Indice CD' ref={inputRef3} id="message" name="message" />
      </form>

      <h3>Indice 3D</h3>
      <form className='input input3'>
        <input type="text" placeholder='Indice 3D' ref={inputRef2} id="message" name="message" />
      </form>

      <button onClick={handleClick} className="button">Valider</button>
    </div>
  )
}
