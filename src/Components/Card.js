import React from "react";

function Card({infos, numbcard, question, answer, clicked, setClicked, correct, setCorrect, icons, setIcons}) {
    let [game, setGame] = React.useState(1);
    let [result, setResult] = React.useState("");
    let [nameclass, setNameclass] = React.useState("");

    if(game === 1) {
        if(numbcard === infos.length) {
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
        if(numbcard === infos.length) {
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
        if(numbcard === infos.length) {
            return (
                <div className="last">
                    <div className="card-answer">
                        <h3>{answer}</h3>
                        <div className="options">
                            <div className="fail" onClick={() => {
                                setGame(4);
                                setClicked(clicked + 1);
                                setResult("close-circle");
                                setNameclass("card fail-result");        
                                setIcons([...icons, "close-circle"]);
                            }}>
                            <h4>Não lembrei</h4>
                            </div>
                            <div className="almost" onClick={() => {
                                setGame(4);
                                setClicked(clicked + 1);
                                setResult("help-circle");
                                setNameclass("card almost-result");
                                setCorrect(correct + 1);
                                setIcons([...icons, "help-circle"]);
                            }}>
                            <h4>Quase não lembrei</h4>
                           </div>
                           <div className="sucsess" onClick={() => {
                                setGame(4);
                                setClicked(clicked + 1);
                                setResult("checkmark-circle");
                                setNameclass("card sucsess-result");
                                setCorrect(correct + 1);
                                setIcons([...icons, "checkmark-circle"]);
                            }}>
                            <h4>Zap!</h4>
                            </div>
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
                        setClicked(clicked + 1);
                        setResult("close-circle");
                        setNameclass("card fail-result");
                        setIcons([...icons, "close-circle"]);
                        }}>
                       <h4>Não lembrei</h4>
                   </div>
                   <div className="almost" onClick={() => {
                        setGame(4);
                        setClicked(clicked + 1);
                        setResult("help-circle");
                        setNameclass("card almost-result");
                        setCorrect(correct + 1);
                        setIcons([...icons, "help-circle"]);
                        }}>
                       <h4>Quase não lembrei</h4>
                   </div>
                   <div className="sucsess" onClick={() => {
                        setGame(4);
                        setClicked(clicked + 1);
                        setResult("checkmark-circle");
                        setNameclass("card sucsess-result");
                        setCorrect(correct + 1);
                        setIcons([...icons, "checkmark-circle"]);
                        }}>
                       <h4>Zap!</h4>
                   </div>
                </div>
            </div>
        );
    }
    if(game === 4) {
        if(numbcard === infos.length) {
            return (
                <div className="last">
                    <div className={nameclass}>
                        <p>Pergunta {numbcard}</p>
                        <ion-icon name={result}></ion-icon>
                    </div>
                </div>
            );
        }
        return (
               <div>
                    <div className={nameclass}>
                        <p>Pergunta {numbcard}</p>
                        <ion-icon name={result}></ion-icon>
                    </div>
                </div>
        );
    }
       
}

export default Card;