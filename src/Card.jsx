import propTypes from 'prop-types'

function Card(props) {

    return(
        <div className="card">
            <img className="card-image" src="https://via.placeholder.com/150" alt="pp" />
            <h2>{props.name}</h2>
            <p>I Am A Confused Prani</p>
        </div>
    );
}

Card.propTypes = {
    name: propTypes.string
}

Card.defaultProps = {
    name: "Guest"
}

export default Card