import './App.css';
import Dot from "./Dot";
import React, {useState} from 'react';

function App() {

    const [isActive, setIsActive] = useState(null);

    return (
        <div className="dots-wrapper">
            {new Array(20).fill('#000000').map((_, i) => (
                <Dot key={i} value={i} isActive={isActive} setIsActive={setIsActive}/>
            ))}
        </div>
    );
}

export default App;
