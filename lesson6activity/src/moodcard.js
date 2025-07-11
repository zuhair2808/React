import { useState } from "react";
import "./moodcard.css";

function MoodCard (){
    const [mood, setMood] = useState("Happy");

    const cardStyle = {
        backgroundColor: "white",
        border: "2px solid #26a69a",
        borderRadius: "12px",
        width:"260px",
        padding:"20px",
        margin: "30px auto",
        textAlign: "center",
        color: "#004d40"
    };

    const textStyle = {
        fontSize: "20px",
        marginBottom: "15px"
    };
    const changeMood = function (){
        const moods= ["Happy", "Sad", "Angry", "Sleepy"];
        const randomMood = moods[Math.floor(Math.random() * moods.length)];
        setMood(randomMood);
    }
    return(
        <div style={cardStyle}>
            <h2 style={{ color: '#00796b'}}>My Mood Today</h2>
            <p style={textStyle}>{mood}</p>
            <button className="mood-button" onClick={changeMood}>Change Mood</button>
        </div>
    );
}
export default MoodCard;
