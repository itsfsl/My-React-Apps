import React, {useState} from "react"

function OnChange() {

    const [name, setName] = useState("Guest")

    function handleNameChange(e) {
        setName(e.target.value)
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>
        </div>
    );
}

export default OnChange