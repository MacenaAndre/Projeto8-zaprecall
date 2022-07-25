import React from "react";

function CardNumber({numbcard, question, answer}) {
    let [game, setGame] = React.useState(1);
    let [result, setResult] = React.useState("");
    let [nameclass, setNameclass] = React.useState("");

    if(game === 1) {
        if(numbcard === 8) {
            return (
                <div className="card last">
                    <h2>Pergunta {numbcard}</h2>
                    <img className="play" src="./assets/images/play.png" alt="play" onClick={() => setGame(2)}></img>
                </div>
            );
        }
        return (
            <div className="card">
                <h2>Pergunta {numbcard}</h2>
                <img className="play" src="./assets/images/play.png" alt="play" onClick={() => setGame(2)}></img>
            </div>
        );
    }
    if(game === 2) {
        if(numbcard === 8) {
            return (
                <div className="card-question last">
                    <h3>{question}</h3>
                    <img className="arrow" src="./assets/images/setinha.png" alt="arrow" onClick={() => setGame(3)}></img>
                </div>
               );
        }
       return (
        <div className="card-question">
            <h3>{question}</h3>
            <img className="arrow" src="./assets/images/setinha.png" alt="arrow" onClick={() => setGame(3)}></img>
        </div>
       );
    }
    if(game === 3) {
        if(numbcard === 8) {
            return (
            <div className="card-answer last">
                <h3>{answer}</h3>
                <div className="options">
                   <div className="fail" onClick={() => {
                        setGame(4);
                        setResult("close-circle");
                        setNameclass("card fail-result");
                        }}>
                       <h4>Não lembrei</h4>
                   </div>
                   <div className="almost" onClick={() => {
                        setGame(4);
                        setResult("help-circle");
                        setNameclass("card almost-result");
                        }}>
                       <h4>Quase não lembrei</h4>
                   </div>
                   <div className="sucsess" onClick={() => {
                        setGame(4);
                        setResult("checkmark-circle");
                        setNameclass("card sucsess-result");
                        }}>
                       <h4>Zap!</h4>
                   </div>
                </div>
            </div>
        );
        }
        return (
            <div className="card-answer">
                <h3>{answer}</h3>
                <div className="options">
                   <div className="fail" onClick={() => {
                        setGame(4);
                        setResult("close-circle");
                        setNameclass("card fail-result");
                        }}>
                       <h4>Não lembrei</h4>
                   </div>
                   <div className="almost" onClick={() => {
                        setGame(4);
                        setResult("help-circle");
                        setNameclass("card almost-result");
                        }}>
                       <h4>Quase não lembrei</h4>
                   </div>
                   <div className="sucsess" onClick={() => {
                        setGame(4);
                        setResult("checkmark-circle");
                        setNameclass("card sucsess-result");
                        }}>
                       <h4>Zap!</h4>
                   </div>
                </div>
            </div>
        );
    }
    if(game === 4) {
        return (
               <div className={nameclass}>
                    <p>Pergunta {numbcard}</p>
                    <ion-icon name={result}></ion-icon>
                </div>
        );
    }
       
}

export default CardNumber;