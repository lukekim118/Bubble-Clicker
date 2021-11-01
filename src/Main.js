import { createElement } from "react";
import { useState } from "react";
//testing
const Main = () => {
    const [bubbles, setBubbles] = useState(0);
    const [school, setSchool] = useState("Kindergarten");
    const [grade, setGrade] = useState(0);
    const [clickPower, setClickPower] = useState(1);
    const [upgrade, setUpgrade] = useState(1);
    const [cost, setCost] =useState(100);
    const [win, setWin] = useState(false);
    const [bubblePopped, setBubblePopped] = useState(false);
    
    const timeOut = () => {
        setTimeout(() => {
            setBubblePopped(false);
        }, 1000);
    }
    
    const handleBubble = () => {
        setBubbles(bubbles + clickPower);
        setBubblePopped(true);
        timeOut();
    }

    const handleUpgrade = () => {
            if(school==="College"){
                setUpgrade(upgrade*2);
            } else if(school==="Masters"){
                setUpgrade(upgrade*3);
            } else if(school==="Phd"){
                setUpgrade(upgrade*5)
            } else if(school==="Professional"){
                setUpgrade(upgrade*10)
            } else if(school==="World Class"){
                setUpgrade(upgrade*100)
            }
    }
    const handleClickPower = () => {
        setClickPower(clickPower + upgrade);
        setBubbles(bubbles-cost);
    }
    const handleSchool = () => {
        setGrade(grade + 1);
        if(school==="Kindergarten"&&grade===0){
            setSchool("Elementary School");
        } else if(school==="Elementary School"&&grade>=5){
            setSchool("Middle School");
            setCost(1000)
        } else if (school === "Middle School"&&grade>= 8){
            setSchool("High School");
            setCost(3000)
        } else if (grade===12){
            setSchool("College");
            setGrade(1);
            setCost(30000)
        } else if(school==="College" && grade===4){
            setSchool("Masters");
            setGrade(1);
            setCost(200000);
        } else if(school==="Masters"&& grade===3) {
            setSchool("Phd");
            setGrade(1);
            setCost(10000000);
        } else if(school==="Phd"&& grade===4){
            setSchool("Professional");
            setGrade("");
            setCost(1000000000);
        } else if(school==="Professional" && grade===""){
            setSchool("World Class")
            setCost(1000000000000)
        } else if(school==="World Class"){
            setWin(true);
        }
    }
    const handleClick = () => {
        if(bubbles>=cost){
            handleSchool();
            handleClickPower();
            handleUpgrade();
        }
    }
    return (
        <div className="home">
            {!win ? <><div className="title">
                <h1>BUBBLE CLICKER</h1>
            </div>
            <div>
                <div onClick={handleBubble} className="bubble">
                    <p>BUBBLES : {bubbles}</p>
                    <img src ={bubblePopped ? "/images/bubble.gif" : "images/bubbleStatic.jpg"} className="bubbleImg"></img>
                </div>
                <div className="school">
                    <p>Cost {cost} bubbles</p>
                    <button onClick={handleClick} className="purchase"><p>PURCHASE UPGRADE </p></button>
                </div>
                <div className="status">
                    <h3>{school} {grade}</h3>
                    <h3>CLICK POWER : {clickPower}</h3>
                    <h3>UPGRADE AMOUNT : {upgrade}</h3>
                </div>
            </div></>
            :
            <div><h1>CONGRATULATIONS YOU WIN THE GAME</h1></div>}
        </div>

      );
}

export default Main;