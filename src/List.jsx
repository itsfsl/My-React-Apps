import propTypes from 'prop-types'

function List(props) {

    const category = props.category
    const itemList = props.items

    const listItems = itemList.map(item => <li key={item.id}> {item.name}: <b>{item.calories}</b></li>)

    return(
        <>
            <h3>{category}</h3>
            <ul>{listItems}</ul>
        </>
    );
}

List.propTypes = {
    category: propTypes.string,
    items: propTypes.arrayOf(propTypes.shape({
                            id: propTypes.number,
                            name: propTypes.string,
                            calories: propTypes.number
    }))
}

export default List