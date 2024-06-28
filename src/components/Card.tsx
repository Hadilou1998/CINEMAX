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
        <section className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {movies.map((card) => (
            <div 
            key={ card.imdbID } // La clé qui rend unique l'élément 
            className="p-3 transition-shadow duration-200 ease-in-out border rounded-lg shadow-md bg-slate-50 hover:shadow-lg">
                <div className="">
                    <img 
                        src={ card.Poster } 
                        className="rounded-lg" 
                        alt={ card.Title } />
                        <div className="flex flex-col justify-between p-2">
                            <h5 className="text-xl font-light leading-relaxed">{ card.Title }</h5>
                            <p className="text-center">{ card.Year }</p>
                        </div>
                </div>
            </div>
        )) }
        </section>
    )
}