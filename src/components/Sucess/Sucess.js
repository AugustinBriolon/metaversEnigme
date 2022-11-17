import { useRef } from 'react'
import { useNavigate } from "react-router-dom"

export default function Sucess() {

  const inputRef = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  let navigate = useNavigate();

  function handleClick() {
    if (inputRef2.current.value === 'modelisation' || inputRef2.current.value === 'modelisation ' || inputRef2.current.value === 'Modelisation ' || inputRef2.current.value === 'Modelisation ') {
      if(inputRef3.current.value === 'creation' || inputRef3.current.value === 'Creation' || inputRef3.current.value === 'creation ' || inputRef3.current.value === 'Creation ') {
        if(inputRef.current.value === 'developpeur' || inputRef.current.value === 'Developpeur' || inputRef.current.value === 'developpeur ' || inputRef.current.value === 'Developpeur ') {
          navigate('/')
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

      <h3>Indice JV</h3>
      <form className='input input3'>
        <input type="text" placeholder='Indice JV' ref={inputRef2} id="message" name="message" />
      </form>

      <button onClick={handleClick} className="button">Valider</button>
    </div>
  )
}
