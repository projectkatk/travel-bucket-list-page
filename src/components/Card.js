import mapdot from "../img/mapdot.svg"
import ContactMe from "../components/ContactMe"


const Card = (props) => {
    return (
        <div className="mainWrapper">
            <img className="main-image img-fluid" src={`${props.imageUrl}`} alt="df" />
            <div className="card-info">
                <div className="card-header">
                    <img src={mapdot} alt="dot" />
                    <span>{props.location}</span>
                    <a href={props.googleMapsUrl} rel="noreferrer" target="_blank">View on Google Maps</a>
                </div>
                <div className="card-content">
                    <h2>{props.title}</h2>
                    <h6 id="dateRange">{props.startDate} - {props.endDate}</h6>
                    <ContactMe />
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card