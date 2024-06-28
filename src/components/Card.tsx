export default function Card({ movies }) {
    
    return (
        <>
            {
                movies.map((card) => (
                    <div 
                    key={ card.imdbID } 
                    className="">
                        <div className="">
                            <img src={ card.Poster } className="" alt={ card.Title } />
                    <h5 className="">{ card.Title }</h5>
                    <p className="">{ card.Year }</p>
                        </div>
                    </div>
                ))
            }
        </>        
    );
}