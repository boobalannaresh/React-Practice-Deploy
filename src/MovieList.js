import React, { useEffect, useState} from "react";
import { Movie } from "./Movie";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { AddMovie } from "./AddMovie";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import { API } from "./global";


export function MovieList() {
  const [movie, setMovie] = useState([]);

  const getMovies = () => {
    fetch(`${API}/movies`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovie(mvs));
  };

  useEffect(() => getMovies(), []); //// => This is happening Auto Refresh

  const deleteMovie = (id) => {
    fetch(`${API}/movies/${id}`, {
      method: "DELETE",
    }).then((data) => getMovies());
    console.log("Deleting Movie", id);
  };


  const navigate = useNavigate()
  return (
    <div>
      <div className="movie-list">
        {movie.map((store) => (
          <div key={store._id}>

            <Movie
              movieTake={store}
              id={store._id}

              deleteButton={
                <IconButton
                sx={{marginLeft:"auto"}}
                  aria-label="delete"
                  color="error"
                  onClick={() => deleteMovie(store._id)}
                >
                  <DeleteIcon  />
                </IconButton>
              }

              editButton={
                <IconButton
                sx={{marginLeft:"auto"}}
                  aria-label="edit"
                  color="secondary" 
                  onClick={()=> navigate(`/movies/edit/${store._id}`)}
                >
                  <EditIcon />
                </IconButton>
              }
            />
            
          </div>
        ))}
      </div>
    </div>
  );
}
