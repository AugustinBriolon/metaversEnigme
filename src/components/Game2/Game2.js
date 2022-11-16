import { Unity, useUnityContext } from "react-unity-webgl";

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
      <h2>Si vous voulez découvrir le secret de IIMVERSE, il vous faudra passer ce deuxième test :</h2>

      <div className="containerCenter">

        <Unity unityProvider={unityProvider} style={{ width: 800, height: 600, background: "black", justifySelf: "center", alignSelf: "center" }} />

      </div>


    </div>
  )
}
