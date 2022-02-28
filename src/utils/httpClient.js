const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzYzMDVkNjE1ZjA2MWUxZDJjMjcxNTUyNzVhZmY1YiIsInN1YiI6IjYyMThkZDljMzgzZGYyMDA0NGVmNGMzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uxO3bFUlD4Vvz4MJMRlccd8XFtuv8ifM1rS6ehWW_Ys",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
