import './CardDescription.css'
function CardDescription(props) {
    return (
        <>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
            </div>
        </>
    )
}
export default CardDescription