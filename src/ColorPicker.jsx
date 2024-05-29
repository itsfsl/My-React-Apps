import { useState } from "react";

function ColorPicker() {

    const [color, setColor] = useState("#00FF00")

    function handleColorChange(e) {
        setColor(e.target.value)
    }

    return(
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label htmlFor="">Select a color:</label>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    );
}

export default ColorPicker