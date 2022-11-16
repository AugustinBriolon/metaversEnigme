
import { useRef, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"

export default function Game1() {

  const inputRef = useRef(null);
  let navigate = useNavigate();

  function handleClick() {
    if (inputRef.current.value === 'row') {
      alert('Bonne réponse ! Vous obtenez votre indice : Indice');
      setTimeout(() => {
        navigate('/test2')
      }, 2000)
    } else if (inputRef.current.value === '') {
      alert('Veuillez entrer une réponse');
    } else {
      alert('Mauvaise réponse !');
    }
  }

  return (
    <div>
      <h1>La base du développment Web</h1>

      <h2>Si vous voulez découvrir le secret de IIMVERSE, il vous faudra passer ce premier test :</h2>

      <div className='container'>

        <p>Il existe de multiples façon de placer des élément sur une page Web, mais le plus utilisé et le plus adapté, reste Flexbox.</p>
        <p>L'élément auquel nous affectons une valeur 'display : flex' se comporte d'une manière d'un élément de bloc par rapport à sa façon d'interagir avec le reste de la page, tandis que les enfants se disposent comme des éléments flexibles.</p>

      </div>

      <hr />

      <div className='container'>


        <p>Si nous voulons que les éléments se mettent sur une seul ligne alors nous utiliserons le propriété : 'flex-direction: row'.</p>

        <div className='exemple1'>
          <div className="box"></div>
          <div className="box"></div>
        </div>

      </div>

      <hr />

      <div className='container'>

        <p>À l'inverse, si les éléments doivent être les uns en dessous des autres, alors il faudra utiliser : 'flex-direction: column'.</p>

        <div className='exemple2'>
          <div className="box"></div>
          <div className="box"></div>
        </div>


      </div>

      <hr />

      <div className='container'>
        <p>Bon, maintenant que vous savez tous cela, voyons voir si avez compris :</p>
      </div>

      <div className='question'>

        <p>Quelle propriété permet de placer les éléments sur une seule ligne grace à flex-direction ?</p>

        <input type="text" placeholder='Votre réponse' ref={inputRef} id="message" name="message" />
        <button onClick={handleClick} className="button">Valider</button>

      </div>

    </div>
  )
}
