import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg'

const { data, error, isLoading, isError } = useQuery("genres", getGenres);

if (isLoading) {
  return <Spinner />;
}

if (isError) {
  return <h1>{error.message}</h1>;
}
const genres = data.genres;
if (genres[0].name !== "All"){
  genres.unshift({ id: "0", name: "All" });
}

const handleChange = (e, type, value) => {
  e.preventDefault();
  props.onUserInput(type, value); // NEW
};

const handleTextChange = (e, props) => {
  handleChange(e, "name", e.target.value);
};

const handleGenreChange = (e) => {
  handleChange(e, "genre", e.target.value);
};
