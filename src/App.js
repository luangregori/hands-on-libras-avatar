import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";

const PLAYER_MANAGER = 'PlayerManager';

function App() {
  function handleClick() {
    unityContent.send(PLAYER_MANAGER, 'playNow', 'MÉDICO');
  }

  const unityContent = new UnityContent(
    'build/playerweb.json',
    'build/UnityLoader.js',
  );

  window.onLoadPlayer = () => {
    unityContent.send(PLAYER_MANAGER, 'initRandomAnimationsProcess');
    unityContent.send(PLAYER_MANAGER, 'setURL', '');
    unityContent.send(PLAYER_MANAGER, 'setBaseUrl', 'https://dicionario2.vlibras.gov.br/2018.3.1/WEBGL/');
    unityContent.send(PLAYER_MANAGER, 'setSubtitlesState', 0);
  };

  return (
    <div>
      <button onClick={handleClick}>Teste</button>
      <Unity unityContent={unityContent}/>
    </div>
  );
}

export default App;
