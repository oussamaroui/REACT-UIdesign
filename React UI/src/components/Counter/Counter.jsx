import "./Counter.css";
import { useState, useEffect } from "react";
import myCarriere from './myCarriere.json';

function Counter() {
    const [countNum, setCountNum] = useState({
        num0 : null, num1 : null, num2 : null
    });

    function mycountNum() {
        setCountNum(prevState=>({
            ...prevState,
            num0 : prevState.num0 < myCarriere[0].num ? prevState.num0 + 6 : prevState.num0,
            num1 : prevState.num1 < myCarriere[1].num ? prevState.num1 + 2 : prevState.num1,
            num2 : prevState.num2 < myCarriere[2].num ? prevState.num2 + 1 : prevState.num2
        }))
    }

    useEffect(() => {
        const intervalNum = setInterval(mycountNum ,20);
        return () => {
            clearInterval(intervalNum);
        }
    }, [countNum]);

    const myCarriereMap = myCarriere.map((myK, index) =>
        (
        <div key={index} className="myCarriere">
            <h3>{countNum[`num${index}`]}{myK.num >= 100 && '+'}</h3>
            <p>{myK.title}</p>
            <span>{myK.desc}</span>
        </div>
        )
    );

    return( 
    <section className="counterSection">
        {myCarriereMap}
    </section>
    );
};

export default Counter;


    // const [countTitle, setCountTitle] = useState(0);
    // const [countDesc, setCountDesc] = useState(0);



    // const mycountTitle = () => { countTitle < myK.title && setCount(countTitle + 1) }
    // const mycountDesc = () => { countDesc < myK.desc && setCount(countDesc + 1) }



    // useEffect(() => {
    //     const intervalTitle = setInterval(mycountTitle, 8);
    //     return () => {
    //         clearInterval(intervalTitle);
    //     }
    // }, [countTitle]);
    // useEffect(() => {
    //     const intervalDesc = setInterval(mycountDesc, 8);
    //     return () => {
    //         clearInterval(intervalDesc);
    //     }
    // }, [countDesc]);









