export interface Movie {
    imdbID: string;
    Title: string;
    Year: string;
    Type: string;
    Poster: string;
    Genre: string;
    imdbRating: string;
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
    Search: Movie[];
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
}

export interface FilmState {
    selectedFilm: MovieDetails | null;
    status: string | null;
    error: string | null;
}

export interface TrendState {
    trends: Movie[];
    status: string | null;
    error: string | null;
}

export interface AuthForUser {
    email: string;
    password: string;
    confirmPassword?: string;
    name?: string;
}