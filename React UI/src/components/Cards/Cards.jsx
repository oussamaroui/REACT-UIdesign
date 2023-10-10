import './Cards.css'
import { useRef, useEffect } from 'react';
import cardsData from './cardsData'

const Cards = (props) => {
    const currentDivs = cardsData.map(() => useRef());
    

    const card = cardsData.map((card, index) => {
        const sendDiv = () => {
            props.mydiv(currentDivs[index].current.id);
        };

        return (
            <div key={index} id={card.id} ref={currentDivs[index]} onClick={sendDiv}>
                <img src={card.img} alt={card.title} />
                <p>{card.title}</p>
                <span>{card.desc}</span>
            </div>
        );
    });


    return (
        <section className='cardsSection'>
            <div className='cardsHeader'>
                <h1>Cards by Components</h1>
                <p>These are some cards to practice cards by components</p>
            </div><br />
            <div className='cardsBody'>
                {card}
            </div>
        </section>
    )
}

export default Cards;