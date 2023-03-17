
const APIPanel = ({result, handleBtnClick}) => {

    return(
        <div className="api-panel">
            <h1>Explore All Kind of Cats</h1>
            <div className="attributes-panel">
                <div className="attribute">{result.name}</div>
                <div className="attribute">{result.weight}</div>
                <div className="attribute">{result.origin}</div>
                <div className="attribute">{result.life_span}</div>
            </div>
            <div className="image-container"><img src={result.img} alt="There is not image for this object." /></div>
            <button onClick={handleBtnClick}>Discover</button>
        </div>
    )

}

export default APIPanel;