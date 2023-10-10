import "./Aside.css";
import cardData from '../../components/Cards/cardsData'
import { useEffect, useRef, useState} from "react";

const Aside = (props) => {
    var divData = cardData.find((div) => div.id == props.data);

    const dd = useRef()
    const closeAside = () => {
        dd.current.style.display = 'none';
    }

    if (dd.current) {
        dd.current.style.display = 'block';
    }

    const theDiv = divData && (
        <aside ref={dd}>
            <h1 onClick={closeAside}>&#215;</h1>
            <div className="cardBody">
                <img src={divData.img} alt='test'/>
                <p>{divData.title}</p>
                <span>{divData.desc}</span>
                <p>{divData.title} is : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus nesciunt ipsum sunt optio id ullam debitis. Magnam officiis nihil rerum quisquam deserunt hic, delectus nemo blanditiis. Nemo doloribus reprehenderit qui.</p>
                <a href="#">www.tutorial.com</a>
            </div>
        </aside>)

    return <>{theDiv}</>;
};

export default Aside;