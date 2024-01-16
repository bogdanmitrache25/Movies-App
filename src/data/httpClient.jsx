const URL = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(URL + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGIzNjU1YWJiZTliYzBjODUzMDc3MDE2MzUwZDFjMSIsInN1YiI6IjY1YTI3OTUzZmNlYzJlMDEyYWQ1NzMxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GdfttfVQGmRMrBKeJmFoYHt7MlZFC6HcJ3Pn2QjCnOk",
      "Content-Type": "application/json; charset=utf-8",
    },
  }).then((result) => result.json());
}
