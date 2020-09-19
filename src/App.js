import React from 'react';
import './App.css'
import phone from "./IPhone_X_vector.svg"
import Button from "./Components/EmptyButton";


function App() {
    return (
        <div className="wrapper">

            <div className="sub-wrapper">
                <img src={phone} className={"image-back"} alt={"mobile"}/>
                <Button>Text</Button>
                <Button>Text</Button>
                <Button>Text</Button>
                <Button>Text</Button>
            </div>
        </div>
    );
}

export default App;
