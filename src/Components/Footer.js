function Footer({ infos, numbanswers, correct, icons }) {
    if(numbanswers !== infos.length) {
         return (
            <div className="footer">
                <h5>{numbanswers}/{infos.length} CONCLUÍDOS</h5>
                <div className="icons">
                {icons.map(( (value, index) => (
                    <ion-icon key={index} name={value}></ion-icon>
                )))}
                </div>
            </div>
            
         );
    }
    
    if(correct !== infos.length) {
        return (
            <div className="footer">
                <div className="result-title">
                    <img src="./assets/images/party.png" alt="party"></img>
                    <h6>Putz...</h6>
                </div>
                <div className="result-description">
                    <h5>Ainda faltam alguns...
                        Mas não desanime!</h5>
                </div>
                <div>
                    <h5>{numbanswers}/{infos.length} CONCLUÍDOS</h5>
                    <div className="icons">
                        {icons.map(( (value, index) => (
                            <ion-icon key={index} name={value}></ion-icon>
                        )))}
                    </div>
                </div>
            </div>
            );
    } else {
        return (
            <div className="footer">
                <div className="result-title">
                    <img src="./assets/images/sad.png" alt="sad"></img>
                    <h6>Parabéns!</h6>
                </div>
                <div className="result-description">
                    <h5>Você não esqueceu de nenhum flashcard!</h5>
                </div>
                <div>
                    <h5>{numbanswers}/{infos.length} CONCLUÍDOS</h5>
                    <div className="icons">
                        {icons.map(( (value, index) => (
                            <ion-icon key={index} name={value}></ion-icon>
                        )))}
                    </div>
                    
                </div>
            </div>
            );
    }
    
    
}

export default Footer;