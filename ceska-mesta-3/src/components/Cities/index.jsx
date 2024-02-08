const City = ({name, population, area, photo}) => {
return (
<div className="section">
    <div className="city">
        <p className="city_name">{name}</p> 
        <p className="city_population">Population: {population}</p>
        <p className="city_area">Area: <span className="bold">{area} km</span></p>
    </div>
    <img src={photo} alt="mesto"/>
</div>
)};

export default City