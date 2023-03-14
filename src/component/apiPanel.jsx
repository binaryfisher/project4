
const APIPanel = ({result, handleBtnClick}) => {

    return(
        <div className="api-panel">
            <h1>Explore Harvard Art Museum</h1>
            <div className="attributes-panel">
                <div className="attribute">{result.dated}</div>
                <div className="attribute">{result.culture}</div>
                <div className="attribute">{result.division}</div>
            </div>
            <div className="image-container"><img src={result.img + "?height=400&width=400"} alt="There is not image for this object." /></div>
            <button onClick={handleBtnClick}>Discover</button>
        </div>
    )

}

export default APIPanel;