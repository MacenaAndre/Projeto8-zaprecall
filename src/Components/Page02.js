import Header from "./Header";
import CardNumber from "./Card";
import React from "react";


function Page02() {
    const infos = [
    {
        question: "O que é JSX?",
        answer: "Uma extensão de linguagem do JavaScript"
    },
    {
        question: "O React é",
        answer: "uma biblioteca JavaScript para construção de interfaces"
    },
    {
        question: "Componentes devem iniciar com",
        answer: "letra maiúscula"
    },
    {
        question: "Podemos colocar __ dentro do JSX",
        answer: "expressões"
    },
    {
        question: "O ReactDOM nos ajuda __",
        answer: "interagindo com a DOM para colocar componentes React na mesma"
    },
    {
        question: "Usamos o npm para __",
        answer: "gerenciar os pacotes necessários e suas dependências"
    },
    {
        question: "Usamos props para __",
        answer: "passar diferentes informações para componentes"
    },
    {
        question: "Usamos estado (state) para __ ",
        answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    }]; 

    let newlist = infos.sort(() => Math.random() - 0.5);

    let [clicked, setClicked] = React.useState(0);

    return (
        <div className="main-2">
            <Header />
            <div className="cards">
             {newlist.map( (value, index) =>  (
                <CardNumber 
                   key={index}
                   numbcard={index + 1}
                   question={value.question}
                   answer={value.answer}
                   clicked={clicked}
                   setClicked={setClicked}
                   />
             ))};
              
            </div>
            <div className="footer">{clicked}/4 CONCLUÍDOS</div>
        </div>
    );
}

export default Page02;