function Button() {

    const handleClick = () => {
        console.log("clicked :)")
    }

    const handleClick2 = (name) => {
        console.log(`${name} stop clicking me`)
    }

    return (
        <button onClick={() => handleClick2("faisal")}>Click Me ❤️</button>
    );
}

export default Button