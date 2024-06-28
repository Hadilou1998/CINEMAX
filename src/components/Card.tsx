interface Card {
    Title: string;
    Year: string;
    imdbID: string;
    Poster: string;
}

interface Movies {
    movies: Card[];
}

export default function Card({ movies }: Movies) {
    
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