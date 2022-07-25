import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
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
    let [correct, setCorrect] = React.useState(0);
    const [icons, setIcons] = React.useState([]);

    return (
        <div className="main-2">
            <Header />
            <div className="cards">
             {newlist.map( (value, index) =>  (
                <Card 
                   key={index}
                   infos={infos}
                   numbcard={index + 1}
                   question={value.question}
                   answer={value.answer}
                   clicked={clicked}
                   setClicked={setClicked}
                   correct={correct}
                   setCorrect={setCorrect}
                   icons={icons}
                   setIcons={setIcons}
                   />
             ))};
              
            </div>
            
            <Footer 
                infos={infos}
                numbanswers={clicked}
                correct={correct}
                icons={icons}
            />  
            
        </div>
    );
}

export default Page02;