import "./styles/App.css";
import React, { useState, useEffect } from "react";
import Grid from "../src/_utils/Grid";
import { BrowserRouter } from "react-router-dom";
import AddCard from "./components/AddCard/AddCard";
import Modal from "../src/_utils/modal/Modal";
import Form from "./components/Form";
import initialData from "../src/data/sampleData.json";
import Artist from "./components/Artist";

const App = () => {
  const [artists, setArtists] = useState(initialData);
  const [artistModelOpen, setArtistModelOpen] = useState(false);

  const handleAddArtist = (artist) => {
    setArtists([...artists, artist]);
  };
  const handleCloseModal = () => setArtistModelOpen(false);

  return (
    <BrowserRouter>
      <h1 className='App'>Music Library</h1>
      <Grid>
        {artists.map((artist) => (
          <Artist
            key={artist.id}
            name={artist.artistName}
            image={artist.image}
          />
        ))}
        <AddCard
          text='Add a new artist'
          onClick={() => setArtistModelOpen(true)}
        />
        {artistModelOpen && (
          <Modal onClose={handleCloseModal}>
            <Form handleAddArtist={handleAddArtist} />
          </Modal>
        )}
      </Grid>
    </BrowserRouter>
  );
};

export default App;
