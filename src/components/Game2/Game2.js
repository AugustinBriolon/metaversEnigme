import { Unity, useUnityContext } from "react-unity-webgl";
import { BubblyLink } from "react-bubbly-transitions";

export default function Game2() {

  const { unityProvider } = useUnityContext({
    loaderUrl: "/MyGame/MyGame.loader.js",
    dataUrl: "/MyGame/MyGame.data.unityweb",
    frameworkUrl: "/MyGame/MyGame.framework.js.unityweb",
    codeUrl: "/MyGame/MyGame.wasm.unityweb",
  });

  return (
    <div>
      <h1>Comprendre Unity</h1>
      <h2>Si vous voulez découvrir le secret de IIMVERSE, il vous faudra passer ce deuxième test !</h2>


      <div className="containerCenter">

      <h2>Cliquer sur les étapes de modélisation dans le sens de leur création :</h2>
      <Unity unityProvider={unityProvider} style={{ width: 800, height: 600, background: "black", justifySelf: "center", marginTop: 50, marginBottom: 50 }} />

      <BubblyLink to="/sucess" className='buttonPulse' colorStart="#009FFF" colorEnd="#DF0FEB" children="Cliquer pour"></BubblyLink>

      </div>


    </div>
  )
}
