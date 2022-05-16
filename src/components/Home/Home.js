import React, { useState } from "react";
import Class from "../Class/Class";
import "./Home.css";
import anteater from "../../images/anty.png";

function Home(props) {
    const [value, setValue] = useState("");
    const [favoriteClasses, setClasses] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!favoriteClasses.includes(value)) {
            setClasses(favoriteClasses.concat(value));
            setValue("");
        }
        console.log(favoriteClasses);
    };

    return (
        <div className="body">
            <div className="head">
                <img src={anteater} />
                <div className="Text">
                    <h1>Favorite Classes List</h1>
                    <form onSubmit={handleSubmit}>
                        <label>Add Favorite Class</label>
                        <div className="btm">
                            <input type="text" value={value} onChange={handleChange}></input>
                            <button type="submit">Add Class!</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="my-classes">
                {favoriteClasses.map((favClasses) => (
                    <Class name={favClasses} key={favClasses}></Class>
                ))}
            </div>
        </div>
    );
}

export default Home;
