
const APIPanel = ({result, handleBtnClick, handleAddBanList}) => {

    return(
        <div className="api-panel">
            <h1>Explore Cats</h1>
            <div className="attributes-panel">
                <div className="attribute" onClick={handleAddBanList}>{result.name}</div>
                <div className="attribute" onClick={handleAddBanList}>{ result.weight ? (result.weight + " lbs"):("") }</div>
                <div className="attribute" onClick={handleAddBanList}>{result.origin}</div>
                <div className="attribute" onClick={handleAddBanList}>{result.life_span ? (result.life_span  + " years"):("")}</div>
            </div>
            <div className="image-container"><img src={result.img} alt="Click Discover button to explore cats!" /></div>
            <button onClick={handleBtnClick}>Discover</button>
        </div>
    )

}

export default APIPanel;