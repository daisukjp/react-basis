import React, {useEffect, useState} from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
    const [num, setNum] = useState(0) ;
    const [faceShow, setFaceShow] = useState(false);
    
    const onClickCountUp = () => {
        setNum(num + 1);
    };
    
    const onClickShowFaceSwitch = () => {
        setFaceShow(!faceShow);
    };
    
    useEffect(() => {
         if (num > 0) {
        if (num % 3 === 0) {
            faceShow || setFaceShow(true);
        } else {
            faceShow && setFaceShow(false);
        }
    }
    }, [num]);
    
    return (
    <>
      <h1 style={{color : 'red'}}>Hello</h1>
      <ColorfulMessage color="blue">How are you</ColorfulMessage>
      <ColorfulMessage color="pink">I'm great</ColorfulMessage>
      <button onClick={onClickCountUp}>Count up</button>
      <br />
      <button onClick={onClickShowFaceSwitch}>ON/OFF</button>
      <p>{num}</p>
      {faceShow && <p>😱😱😱😱😱😱</p>}
      
    </>
    );
};

export default App;