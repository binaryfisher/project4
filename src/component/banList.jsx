const BanList = ({banList}) =>{
    return(
        <div className="ban-list">
        <h2>Ban List</h2>
       
        <div className="ban-list-container">
                {banList && banList.length > 0 ? (
                
                banList.map((item, index) => (
                    <div className="list-card" key={index}>
                      {item}
                    </div>
                )
            )
            ) : (
                <div>
                
                </div>
            )}

        </div>

    </div>
    );
}

export default BanList;