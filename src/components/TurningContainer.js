import React from "react"

import food1 from "../images/food1.png"
import food2 from "../images/food2.png"
import food3 from "../images/food3.png"
import food4 from "../images/food4.png"
import food5 from "../images/food5.png"
import food6 from "../images/food6.png"

function TurningContainer(props) {
    const [plate1rotation, setPlate1Rotation] = React.useState(0)
    const [plate2rotation, setPlate2Rotation] = React.useState(60)
    const [plate3rotation, setPlate3Rotation] = React.useState(120)
    const [plate4rotation, setPlate4Rotation] = React.useState(180)
    const [plate5rotation, setPlate5Rotation] = React.useState(240)
    const [plate6rotation, setPlate6Rotation] = React.useState(300)

    React.useEffect(() => {
        setPlate1Rotation(prevState => prevState + 360)
        setPlate2Rotation(prevState => prevState + 360)
        setPlate3Rotation(prevState => prevState + 360)
        setPlate4Rotation(prevState => prevState + 360)
        setPlate5Rotation(prevState => prevState + 360)
        setPlate6Rotation(prevState => prevState + 360)
    }, [props.selectedFood]) 

    return (
        <div style={{ transform: `rotate(${props.rotation}deg)`}}  className="turningContainer">
            
            <div className="platesContainer">
                <div style={{ transform: `rotate(${plate1rotation}deg)` }} className="plate"><img src={food1}></img></div>
                <div style={{ transform: `rotate(${plate2rotation}deg)` }} className="plate"><img src={food2}></img></div>
                <div style={{ transform: `rotate(${plate3rotation}deg)` }} className="plate"><img src={food3}></img></div>
                <div style={{ transform: `rotate(${plate4rotation}deg)` }} className="plate"><img src={food4}></img></div>
                <div style={{ transform: `rotate(${plate5rotation}deg)` }} className="plate"><img src={food5}></img></div>
                <div style={{ transform: `rotate(${plate6rotation}deg)` }} className="plate"><img src={food6}></img></div>
            </div>
        </div>
    )
}

export default TurningContainer