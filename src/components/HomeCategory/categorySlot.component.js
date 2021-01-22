import './style.category.css'
function CategorySlot(props) {
    return (
        <li className="categorySlotHolder">
            <a href="/" className="categorySlot">
                <img alt={props.title} src={props.imageLink} className="categoryImage">

                </img>
                <span className="categoryTitle">{props.title}</span>
            </a>
        </li>
    )
}

export default CategorySlot