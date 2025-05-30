import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YmE5NzgzYmI0Y2FhMjRkYjM1ZjlkOTUyNDZiMTcxYiIsIm5iZiI6MTc0ODYzODA2MS4wMjQsInN1YiI6IjY4M2ExOTZkMmM2NTM1ZmFiYzU1OWFhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8MXChWNtIvnilHLor4XelZhOxkqZn2zRkwSRhS9Gti8",
  },
});

export default instance;
