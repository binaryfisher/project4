
const APIPanel = ({result, handleBtnClick, handleAddBanList}) => {

    return(
        <div className="api-panel">
            <h1>Explore All Kind of Cats</h1>
            <div className="attributes-panel">
                <div className="attribute" onClick={handleAddBanList}>{result.name}</div>
                <div className="attribute" onClick={handleAddBanList}>{result.weight}</div>
                <div className="attribute" onClick={handleAddBanList}>{result.origin}</div>
                <div className="attribute" onClick={handleAddBanList}>{result.life_span}</div>
            </div>
            <div className="image-container"><img src={result.img} alt="Click Discover button to explore cats!" /></div>
            <button onClick={handleBtnClick}>Discover</button>
        </div>
    )

}

export default APIPanel;