function UserGreeting(props) {

    if (props.isLoggedIn) {
        return <p>Hello {props.username}</p>
    } else {
        return <p>Please Log In</p>
    }
}

export default UserGreeting