const movies = ["Inception", "Interstellar", "Ready Player One"];
let foundMovie; // foundMovie is implicitly of type 'any'

foundMovie = movies.find((movie) => movie === "Inception");

// foundMovie() still compiles, but it is not type-safe
// what is safe is to declare `let foundMovie: string;`
