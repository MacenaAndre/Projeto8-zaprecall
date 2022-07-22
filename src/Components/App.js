import React from "react";
import Page01 from "./Page01";
import Page02 from "./Page02";

function App() {
    const [screen, setScreen] = React.useState(true);

    return (
        <>
           {screen ? (
            <div className="main">
               <Page01 />
               <div className="start" onClick={ () => setScreen(!screen)}>Iniciar Recall!</div>
            </div>   
           ) : (
            <Page02 />
           )}
        </>
    );
}

export default App;

