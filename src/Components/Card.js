import React from "react";

function CardNumber({numbcard, question, answer}) {
    let [game, setGame] = React.useState(1);

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
        if(numbcard = 8) {
            return (
                <div className="card-answer last">
                    <h4>{answer}</h4>
                    <div className="options">
                       <div>asda</div>
                       <div>gdfgdf</div>
                       <div>gdfgdfg</div>
                    </div>
                </div>
            );
        }
        return (
            <div className="card-answer">
                <h4>{answer}</h4>
                <div className="options">
                   <div>asda</div>
                   <div>gdfgdf</div>
                   <div>gdfgdfg</div>
                </div>
            </div>
        );
    }
       
}

export default CardNumber;