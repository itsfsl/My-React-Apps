import { useEffect, useState } from "react";

function UseEffect() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EL ADDED");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EL REMOVED");
        }
    }, [])

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`
    }, [width, height])

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        <div>
            <p>Window Width: {width} Window Height: {height}</p>
        </div>
    );
}

export default UseEffect