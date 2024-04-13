export interface Movie {
    imdbID: string;
    Title: string;
    Year: string;
    Type: string;
    Poster: string;
    Genre: string;
}

interface MovieRating {
    Source: string;
    Value: string;
}

export interface MovieDetails {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: MovieRating[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
}

export interface MovieResponse {
    search: Movie[];
    response: string;
    totalResults: string;
}

export interface MoviesParams {
    filmTitle: string;
    page: number;
}

export interface MoviesState {
    films: Movie[];
    status: string | null;
    error: string | null;
    // selectedFilm: MovieDetails | null;
}

export interface FilmState {
    selectedFilm: MovieDetails | null;
    status: string | null;
    error: string | null;
}