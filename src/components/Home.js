import React from "react"
import miniFood1 from "../images/mini food 1.png"
import miniFood2 from "../images/mini food 2.png"
import miniFood3 from "../images/mini food 3.png"
import miniFood4 from "../images/mini food 4.png"
import miniFood5 from "../images/mini food 5.png"
import miniFood6 from "../images/mini food 6.png"


import TurningContainer from "./TurningContainer"

function Home() {
    const [rotation, setRotation] = React.useState(0)
    const [selectedFood, setSelectedFood] = React.useState(0)

    function selectFood(no) {
        setRotation(no * (-60))
        setSelectedFood(no)
    }

    function rotate() {
        setRotation(prevState => prevState - 60)
    }

    React.useEffect(() => {
        console.log(rotation)
        console.log(`transform: rotate(${rotation}deg)`)
    }, [rotation])
    return (
        <div className="home">
            <div className="header">
                <div>HOME</div>
                <div>MENU</div>
                <div>ABOUT US</div>
                <div>CONTACT</div>
            </div>
            <div className="hero">
                <div className="heroTitle">
                    BLISSFUL BITES
                </div>
                <div className="heroDescription">
                    Explore a world of culinary delights where global flavors come together in perfect harmony. Experience the art of taste in every dish, a symphony of diverse and delicious creations.
                </div>
            </div>
            <div className="checker"></div>
            <div className="miniFoodsContainer">
                <img className={`${selectedFood === 0 ? "activeFood" : ""}`} onClick={() => selectFood(0)} src={miniFood1}></img>
                <img className={`${selectedFood === 1 ? "activeFood" : ""}`} onClick={() => selectFood(1)} src={miniFood2}></img>
                <img className={`${selectedFood === 2 ? "activeFood" : ""}`} onClick={() => selectFood(2)} src={miniFood3}></img>
                <img className={`${selectedFood === 3 ? "activeFood" : ""}`} onClick={() => selectFood(3)} src={miniFood4}></img>
                <img className={`${selectedFood === 4 ? "activeFood" : ""}`} onClick={() => selectFood(4)} src={miniFood5}></img>
                <img className={`${selectedFood === 5 ? "activeFood" : ""}`} onClick={() => selectFood(5)} src={miniFood6}></img>
            </div>
            <TurningContainer 
                rotation={rotation}
                selectedFood={selectedFood}
            />
        </div>
    )
}

export default Home