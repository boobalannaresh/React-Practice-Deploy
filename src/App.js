import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { double, Welcome } from "./Welcome";
import { User } from "./User";
import { MovieList } from "./MovieList";
import { AddColor } from "./AddColor";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import { Home } from "./Home";
import { NotFound } from "./NotFound";
import { AddMovie } from "./AddMovie";
import { MovieDetail } from "./MovieDetail";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { BasicForm } from "./BasicForm";
import { EditMovie } from "./EditMovie";


function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const [movie, setMovie] = useState([]);

  const navigate = useNavigate();

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper style={{ minHeight: "100vh", borderRadius: "0%" }} elevation={9}>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => navigate("/")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => navigate("/movies")}>
                Movies
              </Button>
              <Button color="inherit" onClick={() => navigate("/movies/add")}>
                Add-Movies
              </Button>
              <Button color="inherit" onClick={() => navigate("/color-game")}>
                Color-Game
              </Button>

              <Button sx={{marginLeft:"auto"}}
                startIcon={
                  mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />
                }
                color="inherit"
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                {mode === "light" ? "dark" : "light"} Mode
              </Button>
            </Toolbar>
          </AppBar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/movies"
              element={<MovieList movie={movie} setMovie={setMovie} />}
            />
            <Route
              path="/movies/:id"
              element={<MovieDetail movie={movie} setMovie={setMovie} />}
            />
            <Route
              path="/movies/add"
              element={<AddMovie movie={movie} setMovie={setMovie} />}
            />

            <Route
              path="/movies/edit/:id"
              element={<EditMovie />}
            />

            <Route path="/color-game" element={<AddColor />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/films" element={<Navigate replace to="/movies" />} />

            <Route path="/basic-form" element={<BasicForm />} />

          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
