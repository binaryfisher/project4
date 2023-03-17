const Gallery = ({preCats}) =>{

    return(
        <div className="gallery">
        <h2>Gallery</h2>
       
        <div className="gallery-container">
            {preCats && preCats.length > 0 ? (
        
                preCats.map((dog, index) => (
                    <div className="gallery-card" >
                    <img
                        className="gallery-img"
                        src={dog.img}
                        alt="Undefined screenshot from query"
                        
                    />
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

export default Gallery;